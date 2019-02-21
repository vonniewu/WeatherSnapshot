import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});


class SearchBar extends Component {

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <h2>Find out about weather in your location!</h2>
        <Input
          placeholder="Enter zipcode"
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
      </div>
    );
  }

}



SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
