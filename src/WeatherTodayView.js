import React, { Component, Fragment } from 'react';
import './App.css';

import WeatherCard from './Weathercard.js';
import { convertDtToDate, convertDtToDay } from './UserFunctions.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({

});

class TodayView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Today's Weather in {this.props.data.name}</h1>
        <h3>{convertDtToDate(this.props.data.dt)}</h3>
        <h3>Min Temperature: {this.props.data && this.props.data.main ? this.props.data.main.temp_min: null}</h3>
        <h3>Max Temperature: {this.props.data && this.props.data.main ? this.props.data.main.temp_max: null}</h3>
        <h3>Humidity: {this.props.data && this.props.data.main ? this.props.data.main.humidity: null}</h3>
        <h3>Pressure: {this.props.data && this.props.data.main ? this.props.data.main.pressure: null}</h3>
        <h3>Wind Speed: {this.props.data && this.props.data.wind ? this.props.data.wind.speed: null}</h3>
      </div>
    );
  }
}

TodayView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodayView);
