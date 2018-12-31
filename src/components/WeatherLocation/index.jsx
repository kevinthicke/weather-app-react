import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData'
import * as styles from './styles.css';
import getWeather from '../../utils/getWeather.jsx';

export default class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: null,
            data: null
        }
    }

    componentDidMount = () => {
        const { city } = this.props;
        this.getData(city);
    }

    getData = city => getWeather(city).then(limitedData => this.setState({city, data: limitedData }));


    render() {
        const { city, data } = this.state;
        const { onWeatherLocationClick } = this.props;
    
        return (
            <div className={styles.WeatherLocation} onClick={onWeatherLocationClick}>
                <Location city={city}/>
                <div className={styles.WeatherData}>
                    {
                        data ? <WeatherData data={data}/> : <CircularProgress/>
                    }
                </div>
            </div>
            )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func
}