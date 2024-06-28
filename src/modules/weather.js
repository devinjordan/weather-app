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
      meteorology: {
        conditions: data.current.condition.text,
        icon: data.current.condition.icon,
        temp: data.current.temp_f,
        feelsLike: data.current.feelslike_f,
        windmph: data.current.wind_mph,
        windDir: data.current.wind_dir,
        uv: data.current.uv,
        visibility: data.current.vis_miles,
      },
    };
    return weatherInfo;
  };

  return { getData };
})();

export default weather;