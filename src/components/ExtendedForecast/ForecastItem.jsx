import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getForecast from '../../utils/getForecast';

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
            forecastData.map(data => aForecast.push(data))
            this.setState({ city:name, forecastData:aForecast });
        })
    }

    showListForecast() {
        const { forecastData } = this.state;
        return forecastData.map(data => {
            const { humidity, pressure, temperature, unixTime } = data;
            return (
                <ul>
                    <li> { humidity } </li>
                    <li> { pressure } </li>
                    <li> { temperature } </li>
                </ul>
            )
        })
    }

    render() {
        const { city, forecastData } = this.state;
        
        return (
            <div> 
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
