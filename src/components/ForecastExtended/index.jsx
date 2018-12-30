import React, { Component } from 'react';
import * as styles from './styles.css';
import { urlForecast } from '../../utils/url';

export default class ForecastExtended extends Component {
    
    componentDidUpdate = () => {
        const { city } = this.props;
        this.getForecast(city)
    }
    
    getForecast = (city) => {
        const url = urlForecast(city);
        fetch(url).then(
            response => response.json()).then(
                data => console.log(data)
            )
        
    }

    render() {
        console.log(this.props.city);
        return (
            <div className={styles.ForecastExtended}>
            </div>
        )
    }
}