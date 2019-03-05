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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
    padding: 25
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
  title: {
    textTransform: 'uppercase',
  },
  content: {

  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#404e5b'
    },
    secondary: {
      main: '#2d5982'
    }
  }
});

class TodayView extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
      {this.props.data.map((obj, index) => (
        <React.Fragment>
        <Card className={classes.card}>
            <CardContent>
              <Typography variant="h4" color="primary" className={classes.title}>Irvine, CA</Typography>
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
                      <Typography gutterBottom align='center' variant="body1" color="secondary" className={classes.title}>Preciptation</Typography>
                      <Typography gutterBottom align='center' variant="h5" className={classes.content}>{formatPrecipitation(obj.precipProbability)}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom align='center' variant="body1" color="secondary" className={classes.title}>Humidity</Typography>
                      <Typography gutterBottom align='center' variant="h5" className={classes.content}>{formatHumidity(obj.humidity)}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom align='center' variant="body1" color="secondary" className={classes.title}>Pressure</Typography>
                      <Typography gutterBottom align='center' variant="h5" className={classes.content}>{formatPressure(obj.pressure)}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom align='center' variant="body1" color="secondary" className={classes.title}>Wind</Typography>
                      <Typography gutterBottom align='center' variant="h5" className={classes.content}>{formatWindSpeed(obj.windSpeed)}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" justify="space-around" alignItems="center" className={classes.tempContainer}>
                    <Grid item>
                      <Typography gutterBottom align='center' variant="body1" color="secondary" className={classes.title}>Cloud</Typography>
                      <Typography gutterBottom align='center' variant="h5" className={classes.content}>{formatCloud(obj.cloudCover)}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom align='center' variant="body1" color="secondary" className={classes.title}>UV Index</Typography>
                      <Typography gutterBottom align='center' variant="h5" className={classes.content}>{formatUVIndex(obj.uvIndex)}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom align='center' variant="body1" color="secondary" className={classes.title}>Visibility</Typography>
                      <Typography gutterBottom align='center' variant="h5" className={classes.content}>{formatVisibliity(obj.visibility)}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom align='center' variant="body1" color="secondary" className={classes.title}>Ozone</Typography>
                      <Typography gutterBottom align='center' variant="h5" className={classes.content}>{formatOzone(obj.ozone)}</Typography>
                    </Grid>
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
      </MuiThemeProvider>
      </div>
    );
  }
}

TodayView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodayView);
