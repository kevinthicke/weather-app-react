import React, { Component } from 'react';
import Location from './Location';
import WeatherTemperature from './WeatherData/WeatherTemperature';
import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';
import getOpenWeatherMapData from '../../utils/getOpenWeatherMapData';

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
            <div>
                <Location city={city}/>
                <WeatherTemperature temperature={temperature} weatherId={weatherId}/>
                <WeatherExtraInfo/>
            </div>
            )
    }
}