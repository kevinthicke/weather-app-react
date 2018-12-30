const apiKey = require('./../credentials');
const url = "http://api.openweathermap.org/data/2.5/"

const urlWeather = city => `${url}weather?q=${city}&APPID=${apiKey}`;
const urlForecast = city => `${url}forecast?q=${city}&APPID=${apiKey}`;

export {
    urlWeather,
    urlForecast
} 