import { format } from "date-fns";

function populate(data) {
  const geoDiv = document.getElementById('geodata');
  const weatherDiv = document.getElementById('weather-div');

  // clear previous results
  if (geoDiv.hasChildNodes) {
    geoDiv.innerHTML = '';
    weatherDiv.innerHTML = '';
  };

  // location
  createElement(geoDiv, 'h2', 'geodata', 'city', data.geodata.city + ", " + data.geodata.region);

  // local time
  createElement(geoDiv, 'h3', 'geodata', 'time', format(data.geodata.time, 'p'));

  // conditions
  createElement(weatherDiv, 'p', 'weather-data', 'conditions', data.meteorology.conditions);

  // icon
  const icon = document.createElement('img');
  icon.src = data.meteorology.icon;
  icon.id = icon;
  weatherDiv.appendChild(icon);

  // temp
  createElement(weatherDiv, 'p', 'weather-data', 'temp', data.meteorology.temp);

  // feels like
  createElement(weatherDiv, 'p', 'weather-data', 'feels-like', data.meteorology.feelsLike);
  
  // wind speed
  createElement(weatherDiv, 'p', 'weather-data', 'wind-speed', data.meteorology.windmph);

  // wind direction
  createElement(weatherDiv, 'p', 'weather-data', 'wind-dir', data.meteorology.windDir);

  // uv
  createElement(weatherDiv, 'p', 'weather-data', 'uv', data.meteorology.uv);

  // visibility
  createElement(weatherDiv, 'p', 'weather-data', 'visibility', data.meteorology.visibility);

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