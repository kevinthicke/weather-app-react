import convert from 'convert-units';

const TemperatureConverter = kelvin => Number(convert(kelvin).from('K').to('C').toFixed(0));

export default TemperatureConverter;