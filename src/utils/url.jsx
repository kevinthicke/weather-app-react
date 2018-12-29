const apiKey = require('./../credentials');

const url = city => `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

export default url; 