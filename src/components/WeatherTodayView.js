import React, { Component } from 'react';
import '../App.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// Import utils UserFunctions
import { formatDtTime, formatDtDate, formatDtDay, formatTemperature, formatMoonPhase, formatDewPoint,
  formatPrecipitation, formatHumidity, formatPressure, formatWindSpeed,
  formatCloud, formatUVIndex, formatVisibliity, formatOzone } from '../utils.js';

const styles = theme => ({
  root: {
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    width: '100%',
    padding: 20
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

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class TodayView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

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
                  <Typography gutterBottom align='left' variant="h4" className={classes.inline}>{formatTemperature(obj.temperatureMax)}</Typography>
                  <Typography gutterBottom align='left' variant="h6" className={classes.inline}>&#8457;</Typography>
                  <Typography gutterBottom align='left' variant="h6" className={classes.inline}>/</Typography>
                  <Typography gutterBottom align='left' variant="h4" className={classes.inline}>{formatTemperature(obj.temperatureMin)}</Typography>
                  <Typography gutterBottom align='left' variant="h6" className={classes.inline}>&#8457;</Typography>
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
                    <Grid item>
                      <Typography gutterBottom align='right' variant="body1" className={classes.inline}>Cloud: {formatCloud(obj.cloudCover)}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom align='right' variant="body1" className={classes.inline}>UV Index: {formatUVIndex(obj.uvIndex)}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom align='right' variant="body1" className={classes.inline}>Visibility: {formatVisibliity(obj.visibility)}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom align='right' variant="body1" className={classes.inline}>Ozone: {formatVisibliity(obj.ozone)}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <div className={classes.spacing2} />
              <Typography variant="h6" className={classes.weatherDes}>{obj.summary}</Typography>
            </CardContent>
          </Card>
          <Paper className={classes.root}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Temperature" />
              <Tab label="Preciptation" />
              <Tab label="Wind" />
            </Tabs>
            {value === 0 && <TabContainer>Item One</TabContainer>}
            {value === 1 && <TabContainer>Item Two</TabContainer>}
            {value === 2 && <TabContainer>Item Three</TabContainer>}
          </Paper>
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
