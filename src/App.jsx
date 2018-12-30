import React, { Component } from 'react';
import * as styles from './styles.css';
import LocationList from './components/LocationList';
import ExtendedWeatherLocation from './components/ExtendedWeatherLocation';

const aLocations = ["Bogota", "Lima", "Medellín", "Tenerife", "Barcelona", "Roma", "Cali", "London"];

export default class App extends Component {
  handleSelectedLocation = (city) => {
    console.log(city);
  }

  render() {

    return (
      <div className={styles.App}>
          <LocationList aLocations={aLocations} onSelectedLocation={this.handleSelectedLocation} />
          <ExtendedWeatherLocation/>         
      </div>
      );
  }
}
