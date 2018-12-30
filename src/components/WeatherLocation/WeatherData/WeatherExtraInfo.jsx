import React from 'react';
import * as styles from './styles.css';

const WeatherExtraInfo = ({  pressure, humidity }) => (
    <div className={styles.WeatherExtraInfo}>
            <span> Pressure { pressure } atm</span>
            <span> Humidity { humidity } %</span>
        </div>
)

export default WeatherExtraInfo;