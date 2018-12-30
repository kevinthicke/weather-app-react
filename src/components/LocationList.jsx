import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ aLocations }) => {
    return aLocations.map(city => <WeatherLocation city={city}/>)
}

export default LocationList;