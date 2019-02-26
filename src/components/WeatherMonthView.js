import React, { Component } from 'react';

import { convertDtToDate, convertDtToDay, convertDtToTimestamp } from '../UserFunctions.js';
import OverviewCard from './OverviewCard.js';
import DetailedCard from './DetailedCard.js';
import ButtonBase from '@material-ui/core/ButtonBase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  clickable: {
  }
};

class MonthView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCard: 0
    };
    this.selectDetailedCard = this.selectDetailedCard.bind(this);
    this.displayDetailedCard = this.displayDetailedCard.bind(this);
  }

  selectDetailedCard(value) {
    this.setState({ selectedCard: value});
  }

  displayDetailedCard() {
    const selectedData = this.props.data[this.state.selectedCard];
    console.log("selectedData: ", selectedData);
    return <DetailedCard
      key={this.state.selectedCard}
      sunriseTime={convertDtToTimestamp(selectedData.sunriseTime)}
      sunsetTime={convertDtToTimestamp(selectedData.sunsetTime)}
      moonPhase={selectedData.moonPhase}
      humidity={selectedData.humidity}
      preciptation={selectedData.precipProbability}
      pressure={selectedData.pressure}
      windSpeed={selectedData.windSpeed}
      windGust={selectedData.windGust}
      cloudCover={selectedData.cloudCover}
      uvIndex={selectedData.uvIndex}
      ozone={selectedData.ozone}
      visibility={selectedData.visibility} />;
  }

  render() {
    console.log('Month View... ', this.props.data);
    const { classes } = this.props;
    return (
      <React.Fragment>
      <div className="weathercards-container">{this.props.data.map((obj, index) =>
          <ButtonBase
            key={index}
            component="button"
            className={classes.clickable}
            onClick={() => this.selectDetailedCard(index)}>
            <OverviewCard
              key={index}
              title={convertDtToDay(obj.time)}
              subtitle={convertDtToDate(obj.time)}
              low_temp={obj.temperatureLow}
              high_temp={obj.temperatureHigh}
              icon_name={obj.icon}
              weather_des={obj.summary}/>
        </ButtonBase>)}
      </div>
      <div className="weatherDes">{this.displayDetailedCard()}</div>
      </React.Fragment>
    );
  }
}

MonthView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonthView);
