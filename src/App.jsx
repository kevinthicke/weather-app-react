import React, { Component } from 'react';
import * as styles from './styles.css';
import LocationList from './components/LocationList';
import ExtendedWeatherLocation from './components/ExtendedWeatherLocation';

const aLocations = ["Bogota", "Lima", "Medellín", "Tenerife", "Barcelona", "Roma", "Cali", "London"];

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
          <LocationList aLocations={aLocations}/>
          <ExtendedWeatherLocation/>         
      </div>
      );
  }
}
