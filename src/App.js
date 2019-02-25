import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import WeatherManager from './components/WeatherManager.js';
import NavBar from './components/NavBar.js';


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
