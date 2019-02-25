import React, { Component } from 'react';

import { convertDtToDate, convertDtToDay } from '../UserFunctions.js';
import OverviewCard from './OverviewCard.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

class MonthView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('Month View... ', this.props.data);
    return (
      <div className="weathercards-container">{this.props.data.map((obj, index) =>
          <OverviewCard
            key={index}
            title={convertDtToDay(obj.time)}
            subtitle={convertDtToDate(obj.time)}
            low_temp={obj.temperatureLow}
            high_temp={obj.temperatureHigh}
            icon_name={obj.icon}
            weather_des={obj.summary} />)}
      </div>
    );
  }
}

MonthView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonthView);
