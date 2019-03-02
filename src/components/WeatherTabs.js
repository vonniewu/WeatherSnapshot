import React, { Component } from 'react';
import '../App.css';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import TemperatureGraph from './graphs/TemperatureGraph.js';
import PrecipitationGraph from './graphs/PrecipitationGraph.js';
import WindGraph from './graphs/WindGraph.js';

const styles = theme => ({
  paper: {
    width: '100%',
    padding: 20
  }
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

class WeatherTabs extends Component {

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
      <Paper className={classes.paper}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Temperature" />
          <Tab label="Precipitation" />
          <Tab label="Wind" />
        </Tabs>
        {value === 0 && <TabContainer><TemperatureGraph graphData={this.props.graphData} /></TabContainer>}
        {value === 1 && <TabContainer><PrecipitationGraph graphData={this.props.graphData} /></TabContainer>}
        {value === 2 && <TabContainer><WindGraph graphData={this.props.graphData} /></TabContainer>}
      </Paper>
    );
  }
}

WeatherTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherTabs);
