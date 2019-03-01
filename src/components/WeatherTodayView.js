import React, { Component } from 'react';
import '../App.css';

import { formatDtDate, formatDtDay, formatTemperature } from '../utils.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    minWidth: 300,
  },
  inline: {
    display: 'inline-block'
  },
  spacing: {
    height: 20
  }
});

class TodayView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    console.log("TodayView's data: ", this.props.data);

    return (
      <div className={classes.root}>
      {this.props.data.map((obj, index) => (
        <Card className={classes.card}>
            <CardContent>
              <Typography variant="h3" className={classes.title}>Irvine, CA</Typography>
              <Typography variant="subtitle2" className={classes.timestamp}>Today, {formatDtDate(obj.time)} ({formatDtDay(obj.time)})</Typography>
              <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item>
                  <Typography gutterBottom align='right' variant="h4" className={classes.inline}>{formatTemperature(obj.temperatureMax)}</Typography>
                  <Typography gutterBottom align='right' variant="h6" className={classes.inline}>&#8457;</Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom align='right' variant="h4" className={classes.inline}>{formatTemperature(obj.temperatureMin)}</Typography>
                  <Typography gutterBottom align='right' variant="h6" className={classes.inline}>&#8457;</Typography>
                </Grid>
              </Grid>
              <Typography variant="h4" className={classes.weatherDes}>{obj.summary}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
}

TodayView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodayView);
