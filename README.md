# Ejercicio 1

Se construye un componente `WeatherLocation` formado por otros dos componenes `Location` (que muestra el nombre de una ciudad) y `WeatherData` (que muestra la información meteorológica de esa ciudad). El componente `WeatherData` contiene a su vez otros dos componentes: `WeatherTemperature` (que muestra la temperatura de la ciudad) y `WeatherExtraInfo` (que muestra la humedad y velocidad del viento). 

El componente `WeatherLocation` debe recibir únicamente como propiedad el nombre de la ciudad. Los datos meteoroógicos se obtienen desde la API `WeatherOpenMap`.