import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getForecast from '../../utils/getForecast';
import WeatherData from '../WeatherLocation/WeatherData';
import { unixTimeToString } from './../../utils/moment';
import * as styles from './styles.css';

export default class ExtendedForecast extends Component {
    constructor() {
        super();
        this.state = {
            forecast: null
        }
    }

    componentWillMount() {
        const { city } = this.props;
        getForecast(city).then(forecast => this.setState({ forecast }));
    }

    /*se ejecuta si hay alguna actualizacion de las propiedades*/
    componentWillReceiveProps(nextProps) {
        if (nextProps.city!=this.props.city){
            getForecast(nextProps.city).then(forecast => this.setState({ forecast }));
        }
    }

    showForecastExtended(forecast) {
        return forecast.map(element => {
            const { unixTime, ... data } = element;
            return (
                <div className={styles.forecastItem} key={unixTime}>
                    <span className={styles.datetime}>
                        { unixTimeToString(unixTime) }
                    </span>
                    <WeatherData data={data}/>
                </div>
            )
        })
    }

    render() {
        const { forecast } = this.state;
        console.log(this.props)
        return (
            <div className={styles.ForecastExtended}> 
                {
                    forecast ? this.showForecastExtended(forecast) : "...loading"
                }
            </div>
        )
        
    }
}

ExtendedForecast.propTypes = {
    city: PropTypes.string
}
