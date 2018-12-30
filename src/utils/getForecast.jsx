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
            }
        } = fullForecastData;

        return ({ unixTime, humidity, pressure, temperature}); 
    })

    return ({ name, aLimitedForecastData});
}

export default function getForecast (city) {
    const url = urlForecast(city);
    return fetch(url).then(
        response => response.json()).then(
            data => {
                return limitedForecastData(data)
            })

}