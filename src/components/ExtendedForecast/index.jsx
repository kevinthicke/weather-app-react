import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import getForecast from '../../utils/getForecast';
import WeatherData from '../WeatherLocation/WeatherData';
import * as styles from './styles.css';

const filterForecastByHour = (forecastData) => {
    const morning = 6;
    const midday = 12;
    const afternoon = 18;
    return forecastData.filter( data => 
        moment.unix(data.unixTime).hour() === morning ||
        moment.unix(data.unixTime).hour() === midday ||
        moment.unix(data.unixTime).hour() === afternoon);
} 

export default class ExtendedForecast extends Component {
    constructor() {
        super();
        this.state = {
            city: null,
            forecastData: null
        }
    }

    componentDidMount() {
        const { city } = this.props;
        
        getForecast(city).then(forecast => {
            const { name, aLimitedForecastData: forecastData } = forecast;
            const aForecast = filterForecastByHour(forecastData);
            this.setState({ city:name, forecastData:aForecast });
        });
    }

    showListForecast() {
        const { forecastData } = this.state;

        return forecastData.map(data => {
            const { humidity, pressure, temperature, weatherId } = data;
            const myData = { humidity, pressure, temperature, weatherId };
            return <WeatherData data={myData} key={data.unixTime}/>
        })
    }

    render() {
        const { forecastData } = this.state;
        
        return (
            <div className={styles.ForecastExtended}> 
                {
                    forecastData ? this.showListForecast() : "...loading"
                }
            </div>
        )
        
    }
}

ExtendedForecast.propTypes = {
    city: PropTypes.string
}
