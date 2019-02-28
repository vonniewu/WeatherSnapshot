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

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 4,
    marginTop: 50,
    marginBottom: 50,
    width: '100%'
  },
  titleLabel: {
    fontColor: '#64b5f6'
  }
});

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
        spacing={8}>
          <Grid item>
            <Typography gutterBottom variant="body1" className={classes.titleLabel}>Sunrise Time</Typography>
            <Typography variant="h4">{this.props.sunriseTime}</Typography>
            <Typography gutterBottom variant="body1" className={classes.titleLabel}>Sunset Time</Typography>
            <Typography variant="h4">{this.props.sunsetTime}</Typography>
            <Typography gutterBottom variant="body1" className={classes.titleLabel}>Moon Phase</Typography>
            <Typography variant="h4">{this.props.moonPhase}</Typography>
            <Typography gutterBottom variant="body1" className={classes.titleLabel}>Dew Point</Typography>
            <Typography variant="h4">{this.props.dewPoint}</Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="body1" className={classes.titleLabel}>Humidity</Typography>
            <Typography variant="h4">{Math.round(this.props.humidity*100)}%</Typography>
            <Typography gutterBottom variant="body1" className={classes.titleLabel}>Preciptation</Typography>
            <Typography variant="h4">{Math.round(this.props.preciptation*100)}%</Typography>
            <Typography gutterBottom variant="body1" className={classes.titleLabel}>Pressure</Typography>
            <Typography variant="h4">{this.props.pressure}</Typography>
            <Typography gutterBottom variant="body1" className={classes.titleLabel}>Wind Speed</Typography>
            <Typography variant="h4">{this.props.windSpeed}</Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="body1">Cloud</Typography>
            <Typography variant="h4">{this.props.cloudCover}</Typography>
            <Typography gutterBottom variant="body1">UV Index</Typography>
            <Typography variant="h4">{this.props.uvIndex}</Typography>
            <Typography gutterBottom variant="body1">Visibility</Typography>
            <Typography variant="h4">{this.props.visibility}</Typography>
            <Typography gutterBottom variant="body1">Ozone</Typography>
            <Typography variant="h4">{this.props.ozone}</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

DetailedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedCard);
