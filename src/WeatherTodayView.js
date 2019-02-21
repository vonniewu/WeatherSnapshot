import React, { Component, Fragment } from 'react';
import './App.css';

import { convertDtToDate, convertDtToDay } from './UserFunctions.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    mindWidth: 300,
  },
  title: {
    fontSize: 40,
  },
  timestamp: {
    fontSize: 20,
  },
  weatherDes: {
    fontSize: 16,
  },
  info: {
    fontSize: 14,
  },
  chip: {
    marginRight: theme.spacing.unit,
  },
});

class TodayView extends Component {

  constructor(props) {
    super(props);
    this.getWeatherDescriptions = this.getWeatherDescriptions.bind(this);
  }

  getWeatherDescriptions() {
    if (this.props.data.weather) {
      const weatherDes = this.props.data.weather[0].description;
      return weatherDes.charAt(0).toUpperCase() + weatherDes.slice(1);
    }
  }

  render() {
    const { classes } = this.props;

    console.log("TodayView's data: ", this.props.data);

    return (
      <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>{this.props.data.name}, CA</Typography>
          <Typography className={classes.timestamp}>{convertDtToDate(this.props.data.dt)} ({convertDtToDay(this.props.data.dt)})</Typography>
          <Typography className={classes.weatherDes}>{this.getWeatherDescriptions()}</Typography>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Typography gutterBottom className={classes.info}>Min Temp: {this.props.data && this.props.data.main ? this.props.data.main.temp_min: null}&#8457;</Typography>
              <Typography gutterBottom className={classes.info}>High Temp: {this.props.data && this.props.data.main ? this.props.data.main.temp_min: null}&#8457;</Typography>
            </Grid>
            <Grid item xs={6}>
              <div>
                <Typography gutterBottom className={classes.info}>Humidity: {this.props.data && this.props.data.main ? this.props.data.main.humidity: null}%</Typography>
                <Typography gutterBottom className={classes.info}>Wind: {this.props.data && this.props.data.wind ? this.props.data.wind.speed: null} mph</Typography>
                <Typography gutterBottom className={classes.info}>Pressure: {this.props.data && this.props.data.main ? this.props.data.main.pressure: null} hPa</Typography>
              </div>
            </Grid>
            <Typography gutterBottom variant="body1">
              Select Units:
            </Typography>
            <div>
              <Chip className={classes.chip} label="Standard" />
              <Chip className={classes.chip} label="Metric" />
              <Chip className={classes.chip} label="Imperial" />
            </div>
          </Grid>
        </CardContent>
      </Card>
      </div>


    );
  }
}

TodayView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodayView);
