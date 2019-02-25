import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';


const styles = theme => ({
  card: {
    maxWidth: 400,
    width: 250
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  lowTemp: {
    display: 'inline-block',
  },
  highTemp: {
    display: 'inline-block',
  }
});

class WeatherCard extends Component {

  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader title={this.props.day} subheader={this.props.date}
        />
        <CardContent>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <Grid item>
              <Typography align='right' variant="h5">{this.props.low_temp}&#8457;</Typography>
            </Grid>
            <Grid item>
              <Typography align='right' variant="h5">{this.props.high_temp}&#8457;</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Weather description: {this.props.weather_description}<br />
              Morning temperature: {this.props.morning_temp}<br />
              Day temperature: {this.props.day_temp}<br />
              Night temperature: {this.props.night_temp}<br />
              Evening temperature: {this.props.evening_temp}<br />
              Pressure: {this.props.pressure} hPa<br />
              Humidity: {this.props.humidity}%<br />
              Wind speed: {this.props.speed} meter/sec
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

WeatherCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(WeatherCard);
