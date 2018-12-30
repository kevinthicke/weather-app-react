import React, { Component } from 'react';
import * as styles from './styles.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const aLocations = ["Bogota", "Lima", "Medellín", "Tenerife", "Barcelona", "Roma", "Cali", "London"];

export default class App extends Component {
  constructor() {
    super();
    this.state = { city: null }
  }
  handleSelectedLocation = (cityClick) => {
    this.setState({ city: cityClick });
  }

  render() {
    const { city } = this.state;
    return (
      <div className={styles.App}>
          <LocationList aLocations={aLocations} onSelectedLocation={this.handleSelectedLocation}/>   
          <ForecastExtended city ={city}/>      
      </div>
      );
  }
}
