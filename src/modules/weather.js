const weather = (() => {

  async function getData(url) {
    const response = await fetch(url, {mode: 'cors'});
    if (!response.ok) {
      throw new Error(`${city} could not be found.`)
    };
    const data = convertData(await response.json());
    return data;
  };

  function convertData(data) {
    const weatherInfo = {
      geodata: {
        city: data.location.name,
        region: data.location.region,
        time: data.location.localtime,
      },
      current: {
        conditions: data.current.condition.text,
        icon: data.current.condition.icon,
        temp: data.current.temp_f + ' \u00B0F',
        feelsLike: data.current.feelslike_f + ' \u00B0F',
        wind: data.current.wind_mph + ' mph ' + data.current.wind_dir,
        uv: data.current.uv,
        visibility: data.current.vis_miles + ' miles',
      },
      forecast: {
        conditions: data.forecast.forecastday[0].day.condition.text,
        high: data.forecast.forecastday[0].day.maxtemp_f,
        low: data.forecast.forecastday[0].day.mintemp_f,
        precipitation: data.forecast.forecastday[0].day.totalprecip_in + "\"",
        chanceOfRain: data.forecast.forecastday[0].day.daily_chance_of_rain + " %",
        windspeed: data.forecast.forecastday[0].day.maxwind_mph + " mph",
      },
      astro: {
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
      }
    };
    return weatherInfo;
  };

  return { getData };
})();

export default weather;