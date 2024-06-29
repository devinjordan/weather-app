import './style.css';
import weather from './modules/weather';
import populate from './modules/populate';


const submitLocationRequest = document.getElementById('search');
const result = document.getElementById('result');

submitLocationRequest.addEventListener('click', async (event) => {
  event.preventDefault();
  let city = document.getElementById('location').value;
  if (city == '') return;
  const apiRequest = 'http://api.weatherapi.com/v1/current.json?key=c8006c9d04664d00b48232348241905&q=' + city;
  const data = await weather.getData(apiRequest);
  populate(data);
});
