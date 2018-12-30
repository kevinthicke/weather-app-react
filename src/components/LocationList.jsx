import React from 'react';
import WeatherLocation from './WeatherLocation';
import * as styles from './styles.css';

const LocationList = ({ aLocations }) => {
    const showLocationList = () => aLocations.map(city => <WeatherLocation city={city} key={city}/>)

    return (
        <div className={styles.aLocations}>
          { showLocationList() }
        </div>
    )
}

export default LocationList;