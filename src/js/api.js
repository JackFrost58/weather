async function getLinkToImage(loc, timeOfYear) {
  // const { currently } = await getWeather(loc, 'en');
  // const { summary } = currently;
  // const { results } = await getCountry(loc, 'en');
  // const { country } = results[0].components;

  const ACCESS_KEY_UNSPLASH = '0a4d5e4d9385c60db28827b3ca00fdb83594e1d0055ac3b4813c6cbacbd40cac';
  // const url = `https://api.unsplash.com/photos/random?query=Minsk,${summary},${timeOfYear}&client_id=${ACCESS_KEY_UNSPLASH}`;
  const url = `https://api.unsplash.com/photos/random?query=Minsk,winter&client_id=${ACCESS_KEY_UNSPLASH}`;
  
  const response = await fetch(url);
  const data = await response.json();
  // return data.urls.regular;
}

async function getCountry(city, lang) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=55944f435f6f421da20541a438c27a52&language=${lang}&pretty=1`;
  return fetch(url).then( response => {
    return response.json();
  })
}

async function getWeather(coord, lang) {
  const WEATHER_API_TOKEN ='vX7P82ukLT84eGMMF74cH7VcwUXwpTTB';
  const url = `https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=${WEATHER_API_TOKEN}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

async function getUserLocation() {  
  const LOCATION_API_TOKEN = 'd1050c63f12f6b';
  return fetch(`https://ipinfo.io/json?token=${LOCATION_API_TOKEN}`).then(response => {
    return response.json();
  });
}

export {getLinkToImage, getCountry, getWeather, getUserLocation}