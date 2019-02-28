import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import TodayView from './WeatherTodayView.js';
import WeekView from './WeatherWeekView.js';
import MonthView from './WeatherMonthView.js';
import { fetchData } from '../utils.js';
import { OPEN_WEATHER_API_KEY, DARK_SKY_API_KEY } from '../credentials.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
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
      darksky_daily: []
    };
    this.fetchCurrentWeatherData = this.fetchCurrentWeatherData.bind(this);
    this.fetchWeekWeatherData = this.fetchWeekWeatherData.bind(this);
    this.fetchWeeklyDetailedData = this.fetchWeeklyDetailedData.bind(this);
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
      console.log("fetchCurrentWeatherData.. Success: ", JSON.stringify(response));
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

    console.log("fetchWeekWeatherData.. daily_data: ", this.state.daily_data);
  }

  fetchWeeklyDetailedData() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    // const API_CALL = proxy + `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${this.state.latitude},${this.state.longitude}`;
    const API_CALL = proxy + `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/33.69,-117.83`;

    console.log("API CALL: ", API_CALL);

    fetch(API_CALL).then(function(response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(response => {
      console.log("Dark Sky API response: ", response);
      return response;
    })
    .then(json => this.setState({ darksky_daily: json.daily.data.slice(0,7)}));
  }

  componentDidMount() {
    this.fetchWeekWeatherData('92604','json','imperial');
    this.fetchCurrentWeatherData('92604','json','imperial');
    this.fetchWeeklyDetailedData();
  }

  displaySelectedView(selected) {
    let selectedView;

    console.log("displaySelectedView...", this.state);

    if (selected === 1) {
      selectedView = <TodayView data={this.state.daily_data} />;
    } else if (selected === 2) {
      selectedView = <WeekView data={this.state.temp_data} />;
    } else if (selected === 3) {
      selectedView = <MonthView data={this.state.darksky_daily} />;
    }
    return selectedView;
  }

  handleOnClick(value) {
    this.setState({
      selected_view: value
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="weather_container">
        A minimalist weather website for your needs.
        <div className={classes.buttonGroups}>
          <Button variant="outlined" color="primary" className={classes.button} onClick={() => { this.handleOnClick(1) }}>Today</Button>
          <Button variant="outlined" color="primary" className={classes.button} onClick={() => { this.handleOnClick(2) }}>This week</Button>
          <Button variant="outlined" color="primary" className={classes.button} onClick={() => { this.handleOnClick(3) }}>This month</Button>
        </div>
        <div>
        {this.displaySelectedView(this.state.selected_view)}
        </div>
      </div>

    );
  }
}

WeatherManager.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherManager);
