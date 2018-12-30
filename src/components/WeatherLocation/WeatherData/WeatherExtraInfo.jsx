import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.css';

const WeatherExtraInfo = ({ pressure, humidity }) => (
    <div className={styles.WeatherExtraInfo}>
            <span> Pressure { pressure } atm</span>
            <span> Humidity { humidity } %</span>
        </div>
)

WeatherExtraInfo.propTypes = {
    pressure: PropTypes.number,
    humidity: PropTypes.number
}

export default WeatherExtraInfo;