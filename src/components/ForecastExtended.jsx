import React, { Component } from 'react';
import * as styles from './styles.css';
import getForecast from '../utils/getForecast';

export default class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            city: null,
            data: null
        }
    }

    componentWillReceiveProps(nextProps) {
        const { city } = nextProps;
        this.getData(city);
    }
    
    getData = (city) => {
        getForecast(city).then(limitedData => this.setState({ city, data:limitedData}));
    }

    showForecastItems = () => {
        const { data } = this.state;
        console.log(data);
        return data.aLimitedForecastData.map(element => <div > {element.unixTime}</div>);
    }
    render() {
        const { city, data } = this.state;
        return (
            <div className={styles.ForecastExtended}>
                { city ? this.showForecastItems() : "...Loading" } 
            </div>
        )
    }
}