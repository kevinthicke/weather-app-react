import React, { Component } from 'react';
import * as styles from './styles.css';
import LocationList from './components/LocationList';
import ExtendedForecast from './components/ExtendedForecast/';

const aLocations = ["Bogota", "Lima", "Medellín", "Tenerife", "Barcelona", "Roma", "Cali", "London"];

export default class App extends Component {
  constructor() {
    super();
    this.state = { city: null }
  }

  handleSelectedLocation = (city) => this.setState({ city });

  render() {
    const { city } = this.state;

    return (
      <div className={styles.App}>
          <div className={styles.title}> Weather App </div>
          <LocationList aLocations={aLocations} onSelectedLocation={this.handleSelectedLocation}/>   
          <div className={styles.ExtendedForecast}> 
          { 
            !city ? "...Loading": <ExtendedForecast city={city}/>  
          }
          </div>      
      </div>
      );
  }
}
