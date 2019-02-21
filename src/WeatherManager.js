import React, { Component } from 'react';
import './App.css';

import TodayView from './WeatherTodayView.js';
import WeekView from './WeatherWeekView.js';
import MonthView from './WeatherMonthView.js';
import { fetchData } from './UserFunctions.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  rootView: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class WeatherManager extends Component {
  constructor(props) {
    super(props);
    const WEATHER_APP_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    this.state = {
      daily_data: '',
      temp_data: [],
      selected_view: 1,
    };

  }

  fetchCurrentWeatherData(zipcode,format,unit) {
    const BASE_URI = 'https://api.openweathermap.org/data/2.5/weather?';
    const URI_QUERY = 'zip=' + zipcode + ',us';
    const DATA_FORMAT = '&mode='+ format;
    const UNIT_FORMAT = '&units=' + unit;
    const WEATHER_API_KEY = '6bd97f32f14fc6b109cbbb2330b9c8f4';
    const API_CALL = BASE_URI + URI_QUERY + DATA_FORMAT + UNIT_FORMAT + '&appid=' + WEATHER_API_KEY;

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
    .then(printing => console.log("PRINT", printing));
  }

  fetchWeatherData() {
    console.debug("fetching..")
    const URI = 'https://api.openweathermap.org/data/2.5/forecast/daily?zip=92604,us&units=imperial';
    const WEATHER_API_KEY = '6bd97f32f14fc6b109cbbb2330b9c8f4';
    const API_CALL = URI + '&mode=json&appid=' + WEATHER_API_KEY;

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
    this.fetchWeatherData();
    // this.fetchCurrentWeatherData('92604','json','metric');
    this.fetchCurrentWeatherData('92604','json','imperial');
    console.log("daily_data: ", this.state.daily_data);
  }

  displaySelectedView(selected) {
    let selectedView;

    console.log("temp_data: ", this.state.temp_data);
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
    console.log("printing state in render()...", this.state.temp_data);
    const { classes } = this.props;

    return (
      <div className={classes.rootView}>
      <Button variant="outlined" color="primary" className={classes.button} onClick={() => { this.handleOnClick(1) }}>Today</Button>
      <Button variant="outlined" color="primary" className={classes.button} onClick={() => { this.handleOnClick(2) }}>This week</Button>
      <Button variant="outlined" color="primary" className={classes.button} onClick={() => { this.handleOnClick(3) }}>This month</Button>
      {this.displaySelectedView(this.state.selected_view)}
      </div>
    );
  }
}

WeatherManager.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherManager);
