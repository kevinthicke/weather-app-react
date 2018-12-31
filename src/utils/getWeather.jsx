import { urlWeather } from "./url";
import fetch from 'node-fetch';

const limitWeatherData = data => {
    const {  
        main: { 
            temp: temperature,
            pressure,
            humidity
        },
        weather: [{
            id: weatherId
        }]
    } = data;
    return ({ temperature, pressure, humidity,weatherId })
}

export default function getWeather(city) {
    const url = urlWeather(city);
    return fetch(url).then(
        response => response.json()).then( 
            data => limitWeatherData(data));
}