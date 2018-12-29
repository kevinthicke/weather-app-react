import url from "./url";
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

export default function getOpenWeatherMapData(city) {
    const urlAPI = url(city);
    const response = fetch(urlAPI).then(response => response.json());
    
    return response.then( data => limitOpenWeatherMapData(data));
}