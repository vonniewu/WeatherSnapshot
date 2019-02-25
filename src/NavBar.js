import React, { Component } from 'react';
import { OPEN_WEATHER_API_KEY } from './credentials.js';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import SettingsDialog from './SettingsDialog.js';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputField: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  settings: {
    padding: theme.spacing.unit,
  },
  highlight: {
    border: '1px solid red'
  }
});

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      is_valid_zipcode: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
    this.isValidZipcode = this.isValidZipcode.bind(this);
  }

  isValidZipcode(zipcode) {
    const API_CALL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${OPEN_WEATHER_API_KEY}`;

    fetch(API_CALL)
    .then(response => response.json())
    .then(json => json.cod === '200')
    .then(is_valid => this.setState({
      is_valid_zipcode: is_valid
    }))
    .catch(error => console.log(error));
  }

  onChangeHandler(event) {
    // console.log("Inside of onChangeHandler...", event.target.value);
  }

  onKeyPressHandler(event) {
    const userInput = event.target.value;

    console.log("Inside of onKeyPressHandler...", userInput);
    console.log("Keypressed: ", event.key);

    if (event.key === 'Enter') {
      event.preventDefault();
      console.log("1 What is request code? ", this.state.is_valid_zipcode);
      this.isValidZipcode(userInput);
      console.log("2 What is request code? ", this.state.is_valid_zipcode);
      if (this.state.is_valid_zipcode) {
        console.log("Is valid zipcode!", true);
      } else {
        console.log("Is not valid zipcode!!!", false);
      }
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              <i className="material-icons">wb_sunny</i> Weather Snapshot
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Enter Zip code.. "
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputField,
                }}
                onChange={this.onChangeHandler}
                onKeyPress={this.onKeyPressHandler}
              />
            </div>
            <SettingsDialog />
          </Toolbar>
        </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
