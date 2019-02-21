import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import WeatherCard from './Weathercard.js';
import { convertDtToDate, convertDtToDay } from './UserFunctions.js';

const styles = theme => ({

});

class WeekView extends Component {

  render() {
    console.log('Week View... ', this.props.data);
    return (
      <div className="weathercards-container">{this.props.data.map((obj,index) =>
        <WeatherCard
        key={index}
        day={convertDtToDay(obj.dt)}
        date={convertDtToDate(obj.dt)}
        low_temp={obj.temp.min}
        high_temp={obj.temp.max}
        morning_temp={obj.temp.day}
        day_temp={obj.temp.day}
        night_temp={obj.temp.night}
        evening_temp={obj.temp.eve}
        weather_description={obj.weather[0].description}
        pressure={obj.pressure}
        humidity={obj.humidity}
        speed={obj.speed} />)}
      </div>
    );
  }
}

WeekView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeekView);
