import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import * as styles from './styles.css';

const WeatherData = ({ data: { temperature, pressure, humidity, weatherId } }) => {
    return (
        <div className={styles.WeatherData}>
            <WeatherTemperature temperature={temperature} weatherId={weatherId}/>
            <WeatherExtraInfo pressure={pressure} humidity={humidity}/>
        </div>
    )
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number,
        pressure: PropTypes.number,
        humidity: PropTypes.number,
        weatherId: PropTypes.number
    })
}

export default WeatherData;