import React, { Component } from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import LocationList from './components/LocationList';
import ExtendedForecast from './components/ExtendedForecast/';

const aLocations = ["Bogota", "Lima", "Medellín", "Tenerife", "Barcelona", "Roma", "Cali", "London"];

const title =  
  <Navbar inverse staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#"> Weather App </a>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>;

export default class App extends Component {
  constructor() {
    super();
    this.state = { city: null }
  }

  handleSelectedLocation = (city) => this.setState({ city });

  render() {
    const { city } = this.state;

    return (
      <Grid>
        { title }
        <Row>
          <Col xs={12} md={6}>
            <LocationList aLocations={aLocations} onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
          <Col xs={12} md={6}>
            { 
              !city ? "Select a city": <ExtendedForecast city={city}/>  
            }
          </Col>
        </Row>
      </Grid>
        
      );
    }
}
