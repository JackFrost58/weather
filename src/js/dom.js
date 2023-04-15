import {getCurrentDate} from './helper';

const percentNumber = 100;
const fieldWeatherToday = document.getElementById('weather-today');
const fieldWeatherFuture = document.getElementById('weatherFuture');
const fieldDayInfo = document.getElementById('dayInfo');
const fieldGeolocation = document.getElementById('geolocation');


const weatherIconClassName = {
  'partly-cloudy-night': 'wi wi-night-partly-cloudy',
  'partly-cloudy-day': 'wi wi-night-partly-cloudy',
  'clear-day': 'wi wi-day-sunny',
  'clear-night': 'wi wi-night-clear',
  'cloudy': 'wi wi-cloud',
  'rain': 'wi wi-rain',
  'sleet': 'wi wi-sleet',
  'snow': 'wi wi-snow',
  'wind': 'wi wi-windy',
  'fog': 'wi wi-fog',
}

const removeElement = () => {  
  const listChangeElements = ['weather-today__day-info', 'weather-today__city','weather-today__info', 'day-temp', 'geolocation__coors'];
  listChangeElements.forEach( (element) => {
    const deleteElements  = document.querySelectorAll(`.${element}`);
    deleteElements.forEach((elem) => {
      elem.remove();
    }) 
  })
}

const renderDay = (lang) => {
  const wrapperDate = document.createElement('div');
  wrapperDate.className = 'weather-today__day-info';

  const listParamDate = getCurrentDate(lang);
  Object.keys(listParamDate).forEach(function(key) {
    const field = document.createElement('span');

    field.innerHTML = listParamDate[key];
    field.classList.add(`weather-today__${key}`);
    field.id = `${key}`

    wrapperDate.appendChild(field);
  })

  fieldDayInfo.appendChild(wrapperDate);
}

const createFieldGeolocation = (name, degree, minute) => {
  const field = document.createElement('span');

  field.innerHTML = `${name}: ${degree}° ${minute}'`;
  field.classList.add(`geolocation__coors`);
  fieldGeolocation.append(field);
}

function renderCity(newCity) {
  const elementCity = document.createElement('h2');
  elementCity.classList.add('weather-today__city');
  elementCity.innerHTML = `${newCity}`;

  fieldWeatherToday.insertBefore(elementCity, fieldDayInfo);
}

function renderWeather(currently, lang) {
  // const {apparentTemperature, temperature, icon, windSpeed, humidity} = currently;
  let summary = 'Rain'
  let apparentTemperature = '20';
  let temperature = '21';
  let windSpeed = 20;
  let humidity = 20;
  let icon = 'rain';
  let arrayWeather;
  if (lang === 'en') {
    arrayWeather = [summary, `Feels like: ${Math.round(apparentTemperature)}°`, `Wind: ${windSpeed} m/s`, `Humidity: ${humidity * percentNumber}%`];
    localStorage.setItem('feelsLikeTrans', 'Feels like');
  } else if (lang === 'ru') {
    arrayWeather = [summary, `По ощущениям: ${Math.round(apparentTemperature)}°`, `Ветер: ${windSpeed} м/с`, `Влажность: ${humidity * percentNumber}%`];
    localStorage.setItem('feelsLikeTrans', 'По ощущениям');
  } else {
    arrayWeather = [summary, `Па адчуваннях: ${Math.round(apparentTemperature)}°`, `Вецер: ${windSpeed} м/с`, `Вільготнасць: ${humidity * percentNumber}%`];
    localStorage.setItem('feelsLikeTrans', 'Па адчуваннях');
  }

  localStorage.setItem('celsiusTemp', Math.round(temperature));
  localStorage.setItem('feelsLikeTemp', Math.round(apparentTemperature));
  
  const infoContainer = document.createElement('div');
  infoContainer.className = 'weather-today__info';

  const tempElement = document.createElement('span');
  tempElement.className = 'weather__degree-number';
  tempElement.id = 'numberTemp';
  tempElement.innerHTML = Math.round(temperature);
  infoContainer.appendChild(tempElement);
  

  const iconElement = document.createElement('i');
  iconElement.className = weatherIconClassName[icon];
  iconElement.classList.add('icon');
  infoContainer.appendChild(iconElement);

  const list = document.createElement('ul');
  list.className = 'list-weather';

   arrayWeather.forEach( (element) => {
     const listElement = document.createElement('li');
     listElement.className = 'list-weather__element';
     listElement.innerText = element;
     list.appendChild(listElement);
   })
    
  infoContainer.appendChild(list);

  fieldWeatherToday.appendChild(infoContainer);
}

function renderFutureWeather(arrayTemp, arrayDays) {
  const {data} = arrayTemp;
  const storageList = [];
  const listFutureDays = arrayDays;

  listFutureDays.forEach( function(element, index) {
    const middleTemp = Math.round((data[index + 1].temperatureMin + data[index + 1].temperatureMax)/2);
    storageList.push(middleTemp);

    const dayWrapper = document.createElement('div');
    dayWrapper.className = 'day-temp'

    const dayElement = document.createElement('p');
    dayElement.className = 'weather-future__element';
    dayElement.innerHTML = element;
    dayWrapper.appendChild(dayElement);

    const tempElement = document.createElement('span');
    tempElement.className = 'weather-future__temp';
    tempElement.innerHTML = middleTemp;
    dayWrapper.appendChild(tempElement);

    const iconElement = document.createElement('i');
    iconElement.className = weatherIconClassName[data[index + 1].icon];
    iconElement.classList.add('icon--small');
    dayWrapper.appendChild(iconElement);
    
    fieldWeatherFuture.appendChild(dayWrapper);
  }) 
  localStorage.setItem('celsiusTempFuture', storageList);
}

const showErrorMessage = () => {
  const message = document.createElement('div');
  const buttonClose = document.createElement('button');
  const textError = document.createElement('p');

  message.className = 'message-error';
  buttonClose.className = 'button-close';
  buttonClose.onclick = () => {    
    document.querySelector('.message-error').remove();
  };

  textError.className = 'message-error__text';
  textError.innerHTML = 'Enter correct city!';
  
  message.appendChild(buttonClose);
  message.appendChild(textError);
  document.querySelector('#wrapper').prepend(message);
}

export {removeElement, renderWeather, renderFutureWeather, renderCity, renderDay, createFieldGeolocation, showErrorMessage};