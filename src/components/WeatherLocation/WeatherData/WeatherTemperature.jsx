import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import * as styles from './styles.css';
import TemperatureConverter from '../../../utils/temperatureUtils';
import getWeatherKeyword from '../../../utils/weatherIconsUtils';

const WeatherTemperature = ({ temperature, weatherId }) => {
    const temp = TemperatureConverter(temperature);
    const weather = getWeatherKeyword(weatherId);

    const showWeatherIcon = () => ( !weather ?
                                    <WeatherIcons name="day-sunny" size="2x"/> : 
                                    <WeatherIcons name={weather} size="2x"/>
    );

    return (
        <div className={styles.WeatherTemperature}> 
            <span className={styles.WeatherTemperatureItem}> { showWeatherIcon() } </span>
            <span className={styles.WeatherTemperatureItem}> { temp } ºC</span>
        </div>
    );    
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherId: PropTypes.number
}

export default WeatherTemperature;