import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import WeatherManager from './WeatherManager.js';
import SearchBar from './Searchbar.js';
import NavBar from './NavBar.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <WeatherManager />
      </div>
    );
  }
}

export default App;
