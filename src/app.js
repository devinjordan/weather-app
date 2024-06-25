const submitLocationRequest = document.getElementById('search');
const result = document.getElementById('result');

submitLocationRequest.addEventListener('click', async (event) => {
  event.preventDefault();
  let city = document.getElementById('location').value;
  const apiRequest = 'http://api.weatherapi.com/v1/current.json?key=c8006c9d04664d00b48232348241905&q=' + city;
  const weather = await getWeather(apiRequest);
});

async function getWeather(apiRequest) {
  const response = await fetch(apiRequest, {mode: 'cors'});
  const weather = await response.json();
  let temp = weather.current.temp_f;
  const stuff = document.createElement('p');
  stuff.textContent = temp;
  result.appendChild(stuff);
}

function populateResults(weather) {
  let temp = document.createElement('p');
  temp.textContent = weather.current.temp_f;
}