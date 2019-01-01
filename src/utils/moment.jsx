import moment from 'moment';

export default function filterForecastByHour (forecast) {
    const morning = 6;
    const midday = 12;
    const afternoon = 18;
    return forecast.filter(data => 
        moment.unix(data.dt).hour() === morning ||
        moment.unix(data.dt).hour() === midday ||
        moment.unix(data.dt).hour() === afternoon);
}

const unixTimeToString = (unixTime) => moment.unix(unixTime).format("MMMM Do YYYY, h:mm:ss a");

export {
    unixTimeToString
}