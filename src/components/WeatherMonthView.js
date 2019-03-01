import React, { Component } from 'react';

import OverviewCard from './OverviewCard.js';
import DetailedCard from './DetailedCard.js';

import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { unstable_Box as Box } from '@material-ui/core/Box';

const styles = {
  OverviewCard_container: {
    width: '100%'
  },
  banner: {
    width: '100%',
    color: '#404e5b',
    textAlign: 'left',
    padding: 10
  },
  spacing: {
    height: 10
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
    const { classes } = this.props;
    return (
      <DetailedCard
      key={this.state.selectedCard}
      sunriseTime={selectedData.sunriseTime}
      sunsetTime={selectedData.sunsetTime}
      moonPhase={selectedData.moonPhase}
      dewPoint={selectedData.dewPoint}
      humidity={selectedData.humidity}
      preciptation={selectedData.precipProbability}
      pressure={selectedData.pressure}
      windSpeed={selectedData.windSpeed}
      windGust={selectedData.windGust}
      cloudCover={selectedData.cloudCover}
      uvIndex={selectedData.uvIndex}
      ozone={selectedData.ozone}
      visibility={selectedData.visibility} />);
  }

  render() {
    console.log('Month View... ', this.props.data);
    const { classes } = this.props;
    return (
      <React.Fragment>
      <Card className={classes.banner}>
        <Typography variant="h6">Weather Forcast for the next 7 days</Typography>
      </Card>
      <div className={classes.spacing}></div>
        <Grid container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.OverviewCard_container}
        >{this.props.data.map((obj, index) =>
          <Grid item>
          <ButtonBase
            focusRipple
            key={index}
            component="button"
            onClick={() => this.selectDetailedCard(index)}>
            <OverviewCard
              key={index}
              dt={obj.time}
              low_temp={obj.temperatureLow}
              high_temp={obj.temperatureHigh}
              icon_name={obj.icon}
              weather_des={obj.summary}/>
            </ButtonBase>
          </Grid>)}
          </Grid>
      <div className={classes.spacing}></div>
      <div>{this.displayDetailedCard()}</div>
      </React.Fragment>
    );
  }
}

MonthView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonthView);
