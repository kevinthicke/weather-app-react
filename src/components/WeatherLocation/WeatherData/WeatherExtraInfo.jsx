import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.css';

const WeatherExtraInfo = ({ pressure, humidity }) => (
    <div className={styles.WeatherExtraInfo}>
            <li className={styles.WeatherExtraInfoItem}> Pressure { pressure } atm</li>
            <li className={styles.WeatherExtraInfoItem}> Humidity { humidity } %</li>
        </div>
)

WeatherExtraInfo.propTypes = {
    pressure: PropTypes.number,
    humidity: PropTypes.number
}

export default WeatherExtraInfo;