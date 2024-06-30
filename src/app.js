import './style.css';
import weather from './modules/weather';
import populate from './modules/populate';


const submitLocationRequest = document.getElementById('search');

submitLocationRequest.addEventListener('click', async (event) => {
  event.preventDefault();
  let city = document.getElementById('location').value;
  if (city == '') return;

  const apiRequest = `https://api.weatherapi.com/v1/forecast.json?key=c8006c9d04664d00b48232348241905&q=${city}`;

  const loader = document.getElementById('loader');
  loader.style.display = 'block';

  const data = await weather.getData(apiRequest);
  
  loader.style.display = 'none';

  populate(data);
});
