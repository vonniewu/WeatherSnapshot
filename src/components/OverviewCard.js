import React, { Component } from 'react';
import Skycons from 'react-skycons';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Create Material-UI themes
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Import global configurations
import { formatDtDay, formatDtDate, formatTemperature, getSkycon } from '../utils.js';

const styles = {
  card: {
    maxWidth: 300,
    width: 180,
  },
  title: {
    fontWeight: 600
  },
  media: {
    height: '100%',
  },
  icon: {
    width: '100%',
    height: '75%'
  },
  degree: {
    fontSize: 12
  },
  inline: {
    display: 'inline-block'
  },
  spacing: {
    height: 20
  }
};

const theme = createMuiTheme({
  palette: {
    textPrimary: {
      main: '#0277bd'
    },
    textSecondary: {
      main: '#f57c00'
    },
    iconColor: {
      main: '#757575'
    },
    primary: {
      main: '#404e5b'
    },
    secondary: {
      main: '#B3BCB7'
    }
  }
});

class OverviewCard extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <MuiThemeProvider theme={theme}>
            <CardContent>
              <Typography align='center' variant='h4' color='primary' fontWeight={900}>{formatDtDay(this.props.dt)}</Typography>
              <Typography gutterBottom align='center' color='secondary' variant='subheading'>{formatDtDate(this.props.dt)}</Typography>
              <div className={classes.spacing}></div>
              <div className={classes.icon}>
                <Skycons
                color='#2d5982'
                icon={getSkycon(this.props.icon_name)}
                autoplay={true} />
              </div>
              <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item>
                  <Typography gutterBottom align='right' variant="h4" color='primary' className={classes.inline}>{formatTemperature(this.props.high_temp)}</Typography>
                  <Typography gutterBottom align='right' variant="h6" color='primary' className={classes.inline}>&#8457;</Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom align='right' variant="h4" color='secondary' className={classes.inline}>{formatTemperature(this.props.low_temp)}</Typography>
                  <Typography gutterBottom align='right' variant="h6" color='secondary' className={classes.inline}>&#8457;</Typography>
                </Grid>
              </Grid>
            </CardContent>
        </MuiThemeProvider>
      </Card>
    );
  }
}

export default withStyles(styles)(OverviewCard);
