import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import TodayView from './WeatherTodayView.js';
import WeekView from './WeatherWeekView.js';
import MonthView from './WeatherMonthView.js';
import { fetchData } from '../UserFunctions.js';
import { OPEN_WEATHER_API_KEY } from '../credentials.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
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
    };
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
    .then(json => this.setState({ daily_data: json}))
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

  componentDidMount() {
    this.fetchWeekWeatherData('92604','json','imperial');
    this.fetchCurrentWeatherData('92604','json','imperial');
  }

  displaySelectedView(selected) {
    let selectedView;

    if (selected === 1) {
      selectedView = <TodayView data={this.state.daily_data} />;
    } else if (selected === 2) {
      selectedView = <WeekView data={this.state.temp_data} />;
    } else if (selected === 3) {
      selectedView = <MonthView data={this.state.temp_data} />;
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
      <div className="container">
        Check out the Weather Forcast in your location!
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
