import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData'
import * as styles from './styles.css';
import getWeather from '../../utils/getWeather.jsx';

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

    getData = city => getWeather(city).then(limitedData => this.setState(limitedData));


    render() {
        const { city, ...data } = this.state;
        const { onWeatherLocationClick } = this.props;
        return (
            <div className={styles.WeatherLocation} onClick={onWeatherLocationClick}>
                <Location city={city}/>
                <div className={styles.WeatherData}>
                    <WeatherData data={data}/>
                </div>
            </div>
            )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func
}