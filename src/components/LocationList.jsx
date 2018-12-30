import React from 'react';
import WeatherLocation from './WeatherLocation';
import * as styles from './styles.css';

const LocationList = ({ aLocations, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        return onSelectedLocation(city);
    }

    const showLocationList = () => {
        return aLocations.map(city => <WeatherLocation city={city} 
                                                       key={city}
                                                       onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>)
    }

    return (
        <div className={styles.aLocations}>
          { showLocationList() }
        </div>
    );
}

export default LocationList;