import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.css';
import TemperatureConverter from '../../../utils/temperatureUtils';

const WeatherTemperature = ({ temperature }) => {
    const temp = TemperatureConverter(temperature);
    return (
        <span className={styles.WeatherTemperature}> { temp }ºC</span>
    );    
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number
}

export default WeatherTemperature;