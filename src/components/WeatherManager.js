import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import TodayView from './WeatherTodayView.js';
import MonthView from './WeatherMonthView.js';
import { OPEN_WEATHER_API_KEY, DARK_SKY_API_KEY, DARK_SKY_PROXY } from '../credentials.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  todayView: {
    width: '100%',
  },
  wm_container: {
    width: '100%',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  buttonGroups: {
    height: 100
  },
  spacing: {
    height: 50
  }
});

class WeatherManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      daily_data: '',
      temp_data: [],
      selected_view: 1,
      weekly_data: {},
      latitude: '',
      longitude: '',
      darkSkyToday: [],
      darksky_daily: [],
      darkSkyNext7Days: [],
      darkSkyHourly: []
    };
    this.fetchCurrentWeatherData = this.fetchCurrentWeatherData.bind(this);
    this.fetchWeekWeatherData = this.fetchWeekWeatherData.bind(this);
    this._fetchDarkSkyWeatherForcast = this._fetchDarkSkyWeatherForcast.bind(this);
  }

  fetchCurrentWeatherData(zipcode,format,unit) {
    const API_CALL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&mode=${format}&units=${unit}&appid=${OPEN_WEATHER_API_KEY}`;

    fetch(API_CALL).then(function(response) {
      // Shorthand to check for an HTTP 2xx response status.
      // See https://fetch.spec.whatwg.org/#dom-response-ok
      if (response.ok) {
        return response;
      }
      // Raise an exception to reject the promise and trigger the outer .catch() handler.
      // By default, an error response status (4xx, 5xx) does NOT cause the promise to reject!
      throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        latitude: response.coord.lat,
        longitude: response.coord.lon
      });
      return response;
    })
    .then(json => this.setState({
      daily_data: json }))
    .catch(error => console.err('Error: ', error));
  }

  fetchWeekWeatherData(zipcode,format,unit) {
    const API_CALL = `https://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipcode},us&mode=${format}&units=${unit}&appid=${OPEN_WEATHER_API_KEY}`;

    fetch(API_CALL).then(function(response) {
      // Shorthand to check for an HTTP 2xx response status.
      // See https://fetch.spec.whatwg.org/#dom-response-ok
      if (response.ok) {
        return response;
      }
      // Raise an exception to reject the promise and trigger the outer .catch() handler.
      // By default, an error response status (4xx, 5xx) does NOT cause the promise to reject!
      throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(json => this.setState({ temp_data: json.list}));
  }

  _fetchDarkSkyWeatherForcast(latitude, longitude) {
    const API_CALL = `${DARK_SKY_PROXY}https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${latitude},${longitude}`;

    fetch(API_CALL).then(function(response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(json => this.setState({
      darkSkyToday: json.daily.data.slice(0, 1),
      darkSkyNext7Days: json.daily.data.slice(1,8),
      darkSkyHourly: json.hourly.data.slice(0,16),
    }));

    console.log("DARKSKY DATA: ", this.state);
  }

  componentDidMount() {
    this.fetchWeekWeatherData('92604','json','imperial');

    const latitude = '33.69';
    const longitude = '-117.83';
    this._fetchDarkSkyWeatherForcast(latitude, longitude);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="weather_container">
        <div className={classes.spacing} />
        <div className={classes.todayView}>
          <TodayView data={this.state.darkSkyToday} graphData={this.state.darkSkyHourly} />
        </div>
        <div className={classes.spacing} />
        <div>
          <MonthView data={this.state.darkSkyNext7Days} />
        </div>
      </div>

    );
  }
}

WeatherManager.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherManager);
