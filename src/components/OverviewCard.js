import React, { Component } from 'react';
import Skycons from 'react-skycons';

import { unstable_Box as Box } from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Create Material-UI themes
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';

// Import global configurations
import { temperatureUnit } from '../configs.js';
import { formatDtDay, formatDtDate, formatTemperature } from '../utils.js';

const styles = {
  card: {
    maxWidth: 300,
    width: 200,
    margin: 15
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
      main: '#0d47a1'
    },
    secondary: {
      main: '#f4af0c'
    }
  }
});

class OverviewCard extends Component {
  constructor(props) {
    super(props);
  }

  getIcon(icon_id) {
    return icon_id.toUpperCase().replace(/[-]/g, '_');
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <MuiThemeProvider theme={theme}>
            <CardContent>
              <Typography align='center' variant='h3' fontWeight={900}>{formatDtDay(this.props.dt)}</Typography>
              <Typography gutterBottom align='center' variant='subheading'>{formatDtDate(this.props.dt)}</Typography>
              <Box m={3} />
              <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item>
                  <Typography gutterBottom align='right' variant="h4" color='primary' className={classes.inline}>{formatTemperature(this.props.high_temp)}</Typography>
                  <Typography gutterBottom align='right' variant="h6" className={classes.inline}>&#8457;</Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom align='right' variant="h4" color='secondary' className={classes.inline}>{formatTemperature(this.props.low_temp)}</Typography>
                  <Typography gutterBottom align='right' variant="h6" className={classes.inline}>&#8457;</Typography>
                </Grid>
              </Grid>
              <div className={classes.icon}>
                <Skycons
                color='primary'
                icon={this.getIcon(this.props.icon_name)}
                autoplay={true} />
              </div>
            </CardContent>
        </MuiThemeProvider>
      </Card>
    );
  }
}

export default withStyles(styles)(OverviewCard);
