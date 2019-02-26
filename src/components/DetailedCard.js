import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {

};

class DetailedCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={32}>
          <Grid item xs={4}>
            <Typography varient="h3">Sunrise Time: {this.props.sunriseTime}</Typography>
            <Typography varient="h3">Sunset Time: {this.props.sunsetTime}</Typography>
            <Typography varient="h3">Moon Phase: {this.props.moonPhase}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography varient="h3">Humidity: {this.props.humidity}</Typography>
            <Typography varient="h3">Preciptation: {this.props.preciptation}</Typography>
            <Typography varient="h3">Pressure: {this.props.pressure}</Typography>
            <Typography varient="h3">Wind Speed: {this.props.windSpeed}</Typography>
            <Typography varient="h3">Wind Gust: {this.props.windGust}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography varient="h3">Cloud Cover: {this.props.cloudCover}</Typography>
            <Typography varient="h3">UVIndex: {this.props.uvIndex}</Typography>
            <Typography varient="h3">Visibility: {this.props.visibility}</Typography>
            <Typography varient="h3">Ozone: {this.props.ozone}</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(DetailedCard);
