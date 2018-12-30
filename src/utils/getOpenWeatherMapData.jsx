import { urlWeather } from "./url";
import fetch from 'node-fetch';

const limitOpenWeatherMapData = data => {
    const { 
        name:city, 
        main: { 
            temp: temperature,
            pressure,
            humidity
        },
        weather: [{
            id: weatherId
        }]
    } = data;

    return ({ city, temperature, pressure, humidity,weatherId })
}

export default function getWeather(city) {
    const url = urlWeather(city);
    return fetch(url).then(
        response => response.json()).then( 
            data => limitOpenWeatherMapData(data));
}