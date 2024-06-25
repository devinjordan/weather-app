const weather = (() => {

  async function getData(url) {
    const response = await fetch(request, {mode: 'cors'});
    if (!response.ok) {
      throw new Error(`${city} could not be found.`)
    };
    const data = convertData(await response.json());
    return data;
  };

  function convertData(data) {
    let weatherInfo = {
      
    }
  }
})();