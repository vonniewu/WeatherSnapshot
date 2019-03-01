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
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Import utils UserFunctions
import { formatDtTime, formatTemperature, formatMoonPhase, formatDewPoint,
  formatPrecipitation, formatHumidity, formatPressure, formatWindSpeed,
  formatCloud, formatUVIndex, formatVisibliity, formatOzone } from '../utils.js';

// Import tooltip information
import {sunriseTimeInfo, sunsetTimeInfo, moonPhaseInfo, dewPointInfo,
  humidityInfo, precipProbabilityInfo, pressureInfo, windSpeedInfo,
  cloudInfo, uvIndexInfo, visibilityInfo, ozoneInfo} from '../tooltipsInfo.js';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 4,
    marginTop: 50,
    marginBottom: 50,
    width: '100%'
  },
  titleLabel: {
    textTransform: 'uppercase',
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

class DetailedCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
      <MuiThemeProvider theme={theme}>
        <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={8}>
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title={sunriseTimeInfo} placement="right">
              <Typography gutterBottom variant="body1" color='secondary' className={classes.titleLabel}>Sunrise Time</Typography>
            </Tooltip>
            <Typography variant="h4">{formatDtTime(this.props.sunriseTime)}</Typography>
            <Tooltip disableFocusListener disableTouchListener title={sunsetTimeInfo} placement="right">
              <Typography gutterBottom variant="body1" color='secondary' className={classes.titleLabel}>Sunset Time</Typography>
            </Tooltip>
            <Typography variant="h4">{formatDtTime(this.props.sunsetTime)}</Typography>
            <Tooltip disableFocusListener disableTouchListener title={moonPhaseInfo} placement="right">
              <Typography gutterBottom variant="body1" color='secondary' className={classes.titleLabel}>Moon Phase</Typography>
            </Tooltip>
            <Typography variant="h4">{formatMoonPhase(this.props.moonPhase)}</Typography>
            <Tooltip disableFocusListener disableTouchListener title={dewPointInfo} placement="right">
              <Typography gutterBottom variant="body1" color='secondary' className={classes.titleLabel}>Dew Point</Typography>
            </Tooltip>
            <Typography variant="h4">{formatDewPoint(this.props.dewPoint)}</Typography>
          </Grid>
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title={humidityInfo} placement="right">
              <Typography gutterBottom variant="body1" color='secondary' className={classes.titleLabel}>Humidity</Typography>
            </Tooltip>
            <Typography variant="h4">{formatHumidity(this.props.humidity)}</Typography>
            <Tooltip disableFocusListener disableTouchListener title={precipProbabilityInfo} placement="right">
              <Typography gutterBottom variant="body1" color='secondary' className={classes.titleLabel}>Preciptation</Typography>
            </Tooltip>
            <Typography variant="h4">{formatPrecipitation(this.props.preciptation)}</Typography>
            <Tooltip disableFocusListener disableTouchListener title={pressureInfo} placement="right">
              <Typography gutterBottom variant="body1" color='secondary' className={classes.titleLabel}>Pressure</Typography>
            </Tooltip>
            <Typography variant="h4">{formatPressure(this.props.pressure)}</Typography>
            <Tooltip disableFocusListener disableTouchListener title={windSpeedInfo} placement="right">
              <Typography gutterBottom variant="body1" color='secondary' className={classes.titleLabel}>Wind Speed</Typography>
            </Tooltip>
            <Typography variant="h4">{formatWindSpeed(this.props.windSpeed)}</Typography>
          </Grid>
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title={cloudInfo} placement="right">
              <Typography gutterBottom variant="body1" color='secondary' className={classes.titleLabel}>Cloud</Typography>
            </Tooltip>
            <Typography variant="h4">{formatCloud(this.props.cloudCover)}</Typography>
            <Tooltip disableFocusListener disableTouchListener title={uvIndexInfo} placement="right">
              <Typography gutterBottom variant="body1" color='secondary' className={classes.titleLabel}>UV Index</Typography>
            </Tooltip>
            <Typography variant="h4">{formatUVIndex(this.props.uvIndex)}</Typography>
            <Tooltip disableFocusListener disableTouchListener title={visibilityInfo} placement="right">
              <Typography gutterBottom variant="body1" color='secondary' className={classes.titleLabel}>Visibility</Typography>
            </Tooltip>
            <Typography variant="h4">{formatVisibliity(this.props.visibility)}</Typography>
            <Tooltip disableFocusListener disableTouchListener title={ozoneInfo} placement="right">
              <Typography gutterBottom variant="body1" color='secondary' className={classes.titleLabel}>Ozone</Typography>
            </Tooltip>
            <Typography variant="h4">{formatOzone(this.props.ozone)}</Typography>
          </Grid>
        </Grid>
      </MuiThemeProvider>
      </Paper>
    );
  }
}

DetailedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedCard);
