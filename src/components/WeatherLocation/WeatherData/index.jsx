import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo'
import * as styles from './styles.css';

const WeatherData = ({ data }) => {
    const { temperature, pressure, humidity, weatherId } = data;
    
    return (
        <div className={styles.WeatherData}>
            <WeatherTemperature temperature={temperature} weatherId={weatherId}/>
            <WeatherExtraInfo pressure={pressure} humidity={humidity}/>
        </div>
    )
}

export default WeatherData;