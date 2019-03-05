import React, { Component } from 'react';
import Skycons from 'react-skycons';
import '../App.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import WeatherTabs from './WeatherTabs.js';

// Import utils UserFunctions
import { formatDtDate, formatDtDay, formatTemperature,
  formatPrecipitation, formatHumidity, formatPressure, formatWindSpeed,
  formatCloud, formatUVIndex, formatVisibliity, formatOzone, getSkycon } from '../utils.js';

const styles = theme => ({
  root: {
    maxWidth: '100%',
  },
  card: {
    width: '100%',
    padding: 20
  },
  icon: {
    width: '75%',
    height: '50%'
  },
  inline: {
    display: 'inline-block'
  },
  spacing1: {
    height: 25
  },
  spacing2: {
    height: 50
  },
});

class TodayView extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      {this.props.data.map((obj, index) => (
        <React.Fragment>
        <Card className={classes.card}>
            <CardContent>
              <Typography variant="h3" className={classes.title}>Irvine, CA</Typography>
              <Typography variant="subtitle2" className={classes.timestamp}>Today, {formatDtDate(obj.time)} ({formatDtDay(obj.time)})</Typography>
              <div className={classes.spacing1} />
              <Grid container direction="row" justify="space-around" alignItems="center" className={classes.tempContainer}>
                <Grid item>
                  <div className={classes.icon}>
                    <Skycons
                    color='#2d5982'
                    icon={getSkycon(obj.icon)}
                    autoplay={true} />
                  <br />
                  <Typography gutterBottom align='left' variant="h4" className={classes.inline}>{formatTemperature(obj.temperatureMax)}</Typography>
                  <Typography gutterBottom align='left' variant="h6" className={classes.inline}>&#8457;</Typography>
                  <Typography gutterBottom align='left' variant="h6" className={classes.inline}>|</Typography>
                  <Typography gutterBottom align='left' variant="h4" className={classes.inline}>{formatTemperature(obj.temperatureMin)}</Typography>
                  <Typography gutterBottom align='left' variant="h6" className={classes.inline}>&#8457;</Typography>
                  </div>
                </Grid>
                <Grid item>
                  <Grid container direction="column" justify="space-around" alignItems="center" className={classes.tempContainer}>
                    <Grid item>
                      <Typography gutterBottom align='right' variant="body1" className={classes.inline}>Preciptation: {formatPrecipitation(obj.precipProbability)}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom align='right' variant="body1" className={classes.inline}>Humidity: {formatHumidity(obj.humidity)}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom align='right' variant="body1" className={classes.inline}>Pressure: {formatPressure(obj.pressure)}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom align='right' variant="body1" className={classes.inline}>Wind: {formatWindSpeed(obj.windSpeed)}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" justify="space-around" alignItems="center" className={classes.tempContainer}>
                      <Typography gutterBottom align='right' variant="body1" className={classes.inline}>Cloud: {formatCloud(obj.cloudCover)}</Typography>
                      <Typography gutterBottom align='right' variant="body1" className={classes.inline}>UV Index: {formatUVIndex(obj.uvIndex)}</Typography>
                      <Typography gutterBottom align='right' variant="body1" className={classes.inline}>Visibility: {formatVisibliity(obj.visibility)}</Typography>
                      <Typography gutterBottom align='right' variant="body1" className={classes.inline}>Ozone: {formatOzone(obj.ozone)}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <div className={classes.spacing2} />
              <Typography variant="h6" className={classes.weatherDes}>{obj.summary}</Typography>
            </CardContent>
          </Card>
          <div className={classes.spacing1} />
          <WeatherTabs graphData={this.props.graphData} />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

TodayView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodayView);
