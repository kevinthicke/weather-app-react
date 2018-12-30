import React, { Component } from 'react';
import * as styles from './styles.css';

const additiveValue = 273.15;

export default class WeatherTemperature extends Component {
    constructor(){
        super();
        this.state = { temperature: null }

        this.changeUnits = this.changeUnits.bind(this);
    }    

    /*it allows us to initialize state.temperature = props.temperature (right?)*/
    componentWillReceiveProps(nextProps) {
        this.setState({ temperature: nextProps.temperature});
    }

    changeUnits () {
        const { temperature } = this.state;
        
        if (temperature>additiveValue) {
            this.setState({ temperature: temperature - additiveValue });
        }
        else {
            this.setState({ temperature: temperature + additiveValue });
        }
    }

    showTemperature () {
        const { temperature } = this.state;
        
        return ( temperature>additiveValue ) ? 
                <button className={styles.btn}> {`${temperature} ºK`} </button> :
                <button className={styles.btn}> {`${temperature} ºC`} </button>
    }

    render() {
        const { temperature } = this.state;
        return(
            <div className={styles.WeatherTemperature} onClick={this.changeUnits}>

                { temperature ? this.showTemperature() : " ... Loading" }
            </div>
        );
    }
}

