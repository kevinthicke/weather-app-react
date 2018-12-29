import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';

export default class App extends Component {
  render() {
    return (
      <WeatherLocation city={"Bogota"}/>
      );
  }
}
