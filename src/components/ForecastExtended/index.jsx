import React, { Component } from 'react';
import * as styles from './styles.css';
import { urlForecast } from '../../utils/url';

const limitedForecastData = data => {
    return data;
}

const getForecast = (city) => {
    console.log(city);
    const url = urlForecast(city);
    return fetch(url).then(
        response => response.json()).then(
            data => limitedForecastData(data))
}

export default class ForecastExtended extends Component {
    
    componentDidUpdate = () => {
        const { city } = this.props;
        console.log(city);
        this.getData(city)
    }
    
    getData = (city) => {
        console.log(city);
        getForecast(city).then(limitedData => console.log(limitedData));
    }
    

    render() {
        
        return (
            <div className={styles.ForecastExtended}>
            </div>
        )
    }
}