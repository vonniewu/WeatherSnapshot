import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import WeatherManager from './WeatherManager.js';
import SearchBar from './Searchbar.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <WeatherManager />
      </div>
    );
  }
}

export default App;
