import { urlForecast } from './url';

const limitedForecastData = data => {
    const {
        city: {
            name
        },
        list
    } = data;


    const aLimitedForecastData =list.map(fullForecastData => {
        const {
            dt: unixTime,
            main: {
                humidity,
                pressure,
                temp: temperature
            },
            weather: [{
                id: weatherId
            }]
        } = fullForecastData;
        return ({ unixTime, humidity, pressure, temperature, weatherId}); 
    })

    return ({ name, aLimitedForecastData});
}

export default function getForecast (city) {
    const url = urlForecast(city);
    return fetch(url).then(
        response => response.json()).then(
            data => {
                console.log(limitedForecastData(data));
                return limitedForecastData(data)
        });
}