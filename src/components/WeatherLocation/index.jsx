import React, { Component } from 'react';
import Location from './Location';
import WeatherTemperature from './WeatherData/WeatherTemperature';
import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';
import getOpenWeatherMapData from '../../utils/getOpenWeatherMapData';
import * as styles from './styles.css';

export default class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }

    componentDidMount = () => {
        const { city } = this.props;
        this.getData(city);
    }

    getData = city => getOpenWeatherMapData(city).then(limitedData => this.setState(limitedData));

    render() {
        const { city, temperature, pressure, humidity, weatherId } = this.state;
        return (
            <div className={styles.WeatherLocation}>
                <Location city={city}/>
                    <div className={styles.WeatherData}>
                        <WeatherTemperature temperature={temperature} weatherId={weatherId}/>
                        <WeatherExtraInfo pressure={pressure} humidity={humidity}/>
                    </div>
            </div>
            )
    }
}