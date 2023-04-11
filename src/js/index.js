import {getCountry, getWeather, getUserLocation} from './api';
import {renderGeolocation} from './map';
import {renderWeather, renderFutureWeather, renderCity, renderDay} from './dom';
import {getFutureDays, changeBG, setLang, setMeasure} from './helper'

const fieldTime = document.getElementById('time');

async function init() {
  const lang = setLang();
  if (!localStorage.getItem('measure')) {
    localStorage.setItem('measure', 'celsius')
  }
  const measure = localStorage.getItem('measure');
  const { loc } = await getUserLocation();
  const { currently, daily, timezone } = await getWeather(loc, lang);
  const { results } = await getCountry(loc, lang);
  const { summary } = currently;
  const { city, country } = results[0].components;
  const newCity = `${city}, ${country}`
  
  localStorage.setItem('city', city);
  localStorage.setItem('country', country);
  localStorage.setItem('weather', summary);
  localStorage.setItem('coors', loc);
  localStorage.setItem('timezone', timezone);
  
  changeBG(loc);
  renderCity(newCity);
  renderDay(lang);
  renderWeather(currently, lang);
  renderFutureWeather(daily, getFutureDays(lang));
  setMeasure(measure);
  renderGeolocation(loc, lang);
}

let currentTime = setTimeout(function getCurrentTime() {
  const dateData = new Date();

  const options = {
    timeZone: localStorage.getItem('timezone'),
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  }
  const date = dateData.toLocaleDateString('en', options);
  
  const time = date.split(',')

  fieldTime.innerHTML = time[1];
  currentTime = setTimeout(getCurrentTime, 6000);
}, 1000);

export {init}