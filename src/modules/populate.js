import { format } from "date-fns";

function populate(data) {
  const geoDiv = document.getElementById('geodata');
  const weatherDiv = document.getElementById('current');
  const forecastDiv = document.getElementById('forecast');
  const astroDiv = document.getElementById('astro');

  // clear previous results
  if (geoDiv.hasChildNodes) {
    geoDiv.innerHTML = '';
    weatherDiv.innerHTML = '';
    forecastDiv.innerHTML = '';
    astroDiv.innerHTML = '';
  };

  // Geographical Data
  createElement(geoDiv, 'h2', 'geodata', 'city', `${data.geodata.city}, ${data.geodata.region}`);
  createElement(geoDiv, 'h3', 'geodata', 'time', format(data.geodata.time, 'p'));

  // Current Conditions
  createElement(weatherDiv, 'p', 'weather-data', 'conditions', data.current.conditions);
  const icon = document.createElement('img');
  icon.src = data.current.icon;
  icon.id = icon;
  weatherDiv.appendChild(icon);
  createElement(weatherDiv, 'p', 'weather-data', 'temp', `Temperature: ${data.current.temp}`);
  createElement(weatherDiv, 'p', 'weather-data', 'feels-like', `Feels Like: ${data.current.feelsLike}`);
  createElement(weatherDiv, 'p', 'weather-data', 'wind-speed', `Wind: ${data.current.wind}`);
  createElement(weatherDiv, 'p', 'weather-data', 'uv', `UV Index: ${data.current.uv}`);
  createElement(weatherDiv, 'p', 'weather-data', 'visibility', `Visibility: ${data.current.visibility}`);

  // Forecast
  createElement(forecastDiv, 'h3', 'forecast-data', 'forecast-header', 'Forecast');
  createElement(forecastDiv, 'p', 'forecast-data', 'forecast-conditions', `Conditions: ${data.forecast.conditions}`);
  createElement(forecastDiv, 'p', 'forecast-data', 'forecast-high', `High: ${data.forecast.high} °F`);
  createElement(forecastDiv, 'p', 'forecast-data', 'forecast-low', `Low: ${data.forecast.low} °F`);
  createElement(forecastDiv, 'p', 'forecast-data', 'forecast-precipitation', `Precipitation: ${data.forecast.precipitation}`);
  createElement(forecastDiv, 'p', 'forecast-data', 'forecast-chanceOfRain', `Chance of Rain: ${data.forecast.chanceOfRain}`);
  createElement(forecastDiv, 'p', 'forecast-data', 'forecast-windspeed', `Max Wind Speed: ${data.forecast.windspeed}`);

  // Astronomical Data
  createElement(astroDiv, 'h3', 'astro-data', 'astro-header', 'Astronomical Data');
  createElement(astroDiv, 'p', 'astro-data', 'sunrise', `Sunrise: ${data.astro.sunrise}`);
  createElement(astroDiv, 'p', 'astro-data', 'sunset', `Sunset: ${data.astro.sunset}`);

  function createElement(parentDiv, type, classNames, id, textContent) {
    const newElement = document.createElement(type);
    for (let c in classNames) {
      newElement.classList.add(c);
    };
    newElement.id = id;
    newElement.textContent = textContent;
    parentDiv.appendChild(newElement);
  }
}


export default populate;