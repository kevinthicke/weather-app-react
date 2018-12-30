import React, { Component } from 'react';
import  { Grid, Row, Col } from 'react-flexbox-grid';
import * as styles from './styles.css';
import LocationList from './components/LocationList';
import ExtendedWeatherLocation from './components/ExtendedWeatherLocation';

const aLocations = ["Bogota", "Lima", "Medellín", "Tenerife", "Barcelona", "Roma", "Cali", "London"];

export default class App extends Component {
  render() {
    return (
      <Grid className={styles.App}>
        <Row>
          <Col xs={12} md={6}>
            <LocationList aLocations={aLocations}/> 
          </Col>
          <Col xs={12} md={6}>
            <ExtendedWeatherLocation/>
          </Col>
        </Row>
        
      </Grid>
      );
  }
}
