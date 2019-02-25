import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

class MonthView extends Component {
  render() {
    return (
      <h1>Month View</h1>
    );
  }
}

MonthView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonthView);
