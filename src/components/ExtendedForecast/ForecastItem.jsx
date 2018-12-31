import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import getForecast from '../../utils/getForecast';
import WeatherData from '../WeatherLocation/WeatherData';
import * as styles from './styles.css';

export default class ForecastItem extends Component {
    constructor() {
        super();
        this.state = {
            city: null,
            forecastData: null
        }
    }

    componentDidMount() {
        const { city } = this.props;
        const aForecast = [];
        getForecast(city).then(forecast => {
            const { name, aLimitedForecastData: forecastData } = forecast;
            forecastData.map(data => {
                if (
                    moment.unix(data.unixTime).hour()===6 ||
                    moment.unix(data.unixTime).hour()===12 ||
                    moment.unix(data.unixTime).hour()===18
                    ) aForecast.push(data);
            });
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
        const { city, forecastData } = this.state;
        
        return (
            <div className={styles.ForecastExtended}> 
                {
                    forecastData ? this.showListForecast() : "...loading"
                }
            </div>
        )
        
    }
}

ForecastItem.propTypes = {
    city: PropTypes.string
}
