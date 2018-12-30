import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import * as styles from './styles.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <WeatherLocation city={"Bogota"}/>
      </div>
      );
  }
}
