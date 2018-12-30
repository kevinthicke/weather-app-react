import convert from 'convert-units';

const TemperatureConverter = kelvin => Number(convert(kelvin).from('K').to('C').toFixed(2));

export default TemperatureConverter;