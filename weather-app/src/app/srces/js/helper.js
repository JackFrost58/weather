import {getCountry, getWeather, getLinkToImage} from './api';
import {renderGeolocation} from './map';
import {renderWeather, renderFutureWeather, renderCity, renderDay, removeElement, showErrorMessage} from './dom';

const select = document.querySelector('select');
const buttonsMeasure = document.querySelectorAll('.button-controls__measure');


const listDaysLang = {
  'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  'ru': ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  'be': ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацьвер', 'Пятніца', 'Субота']
}

const listSearchLang = {
  'en': 'Search',
  'ru': 'Поиск',
  'be': 'Пошук'
}

const listPlaceholderLang = {
  'en': 'Search city',
  'ru': 'Поиск города',
  'be': 'Пошук горада'
}

function changeFieldSearchLang(lang) {
  document.querySelector('#buttonSearch').innerHTML = listSearchLang[lang];
  document.querySelector('#townSearch').placeholder = listPlaceholderLang[lang];
}

function tempCelsiusToFahrenheit(temp) {
  const tempCelsius = temp;
  const tempFahrenheit = 9/5 * tempCelsius + 32;

  return tempFahrenheit;
}

const getCurrentDate = (lang) => {
  let listParamDate = {};

  if (lang === 'be') {
    const listMonthsBel = ['cтудзеня', 'лютага', 'сакавіка', 'красавіка', 'мая', 'чэрвеня', 'ліпеня', 'жнівня', 'верасня', 'кастрычніка', 'лістапада', 'снежня'];
    const listDayBel = ['Нядзеля,', 'Панядзелак,', 'Аўторак,', 'Серада,', 'Чацьвер,', 'Пятніца,', 'Субота,']
    const currentDate  = new Date();

    const day = listDayBel[currentDate.getDay()];
    const month = listMonthsBel[currentDate.getMonth()];
    const monthNumber = currentDate.getDate();

    listParamDate = {'weekDay': day, 'weekDayNumber': monthNumber, 'month': month}
  } else {
    const date = new Date();
    const weekDay = date.toLocaleString(lang, {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
    
    const arrayCurrentDate = weekDay.split(' ');
    listParamDate = {'weekDay': arrayCurrentDate[0], 'month': arrayCurrentDate[1], 'weekDayNumber': arrayCurrentDate[2]};
  }

  return listParamDate;
}

const getFutureDays = (lang) => {
  const date = new Date();
  const arrayDays = [];
  const days = listDaysLang[lang];
  
  if (date.getDay() > 3) {
    let nextDay = date.getDay() + 1;

    while (nextDay < 7) {
      arrayDays.push(days[nextDay]);
      nextDay++;
    }

    nextDay = 0;

    while (arrayDays.length < 3) {
      arrayDays.push(days[nextDay]);
      nextDay++;
    }

  } else {

    for (let i = 1; i < 4; i++) {
      arrayDays.push(days[date.getDay() + i]);
    }

  }
  
  return arrayDays;
}

// eslint-disable-next-line consistent-return
function getTimeOfYear() {
  const newDate = new Date();
  const months = {
    'winter': ['December', 'January', 'February'],
    'spring': ['March', 'April', 'May'],
    'summer': ['June', 'July', 'August'],
    'autumn': ['September', 'October', 'November'],
  }

  const currentMonth = newDate.toLocaleDateString('en', {
    month: 'long'
  });

  
  // eslint-disable-next-line no-restricted-syntax
  for (const key in months) {
    if (months[key].includes(currentMonth)){
      return key;
    } 
  }
}

const setLang = function () {
  let language;
  if(localStorage.getItem('defaultLang')) {
    language = localStorage.getItem('defaultLang');
    select.value = localStorage.getItem('defaultLang');
    changeFieldSearchLang(language);
  } else {
    localStorage.setItem('defaultLang', 'en');
    language = localStorage.getItem('defaultLang');
  }
  
  return language;
}

const setMeasure = (measure) => {
  const tempFuture = localStorage.getItem('celsiusTempFuture').split(',');
  const textFieldFeel = localStorage.getItem('feelsLikeTrans')
  const mainTemp = localStorage.getItem('celsiusTemp');
  const feelLikeTemp = localStorage.getItem('feelsLikeTemp');
  const fieldFeelLike = document.querySelectorAll('.list-weather__element');
  
  buttonsMeasure.forEach((element) => {
    element.classList.remove('button-controls__measure--active');
  });
  switch (measure) {
    case ('celsius'):
      localStorage.setItem('measure', 'celsius');
      
      fieldFeelLike[1].innerHTML = `${textFieldFeel}: ${feelLikeTemp}`
      document.querySelector('#celsius').classList.add('button-controls__measure--active');
      document.querySelector('#numberTemp').innerHTML = mainTemp;
      document.querySelectorAll('.weather-future__temp').forEach((elem, index) => {
        elem.innerHTML = tempFuture[index];
      })
      break;

    case ('fahrenheit'):  
      localStorage.setItem('measure', 'fahrenheit');

      fieldFeelLike[1].innerHTML = `${textFieldFeel}: ${tempCelsiusToFahrenheit(feelLikeTemp)}`;
      document.querySelector('#fahrenheit').classList.add('button-controls__measure--active');
      document.querySelector('#numberTemp').innerHTML = tempCelsiusToFahrenheit(mainTemp);
      document.querySelectorAll('.weather-future__temp').forEach((elem, index) => {
      elem.innerHTML = tempCelsiusToFahrenheit(tempFuture[index]);
      })
      break;

    default: localStorage.setItem('measure', 'celsius');
  }
}

const changeBG = async (loc) => {
  const backgroundPlace = document.getElementById('wrapper');

  const linkImage =  await getLinkToImage(loc, getTimeOfYear());

  backgroundPlace.style.background = `url(${linkImage}) center no-repeat`;
  backgroundPlace.style.backgroundSize = 'cover';
}

async function refreshData(city) {
  clearTimeout();
  try{
    
    const lang = setLang();
    const measure = localStorage.getItem('measure');
    const {results} = await getCountry(city, lang);
    const {country} = results[0].components;
    const newCity = results[0].formatted;
    const newCoors = Object.values(results[0].geometry);
    const { currently, daily, timezone } = await getWeather(newCoors, lang);
    const { summary } = currently;

    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
    localStorage.setItem('weather', summary);
    localStorage.setItem('coors', newCoors);
    localStorage.setItem('timezone', timezone);

    removeElement();
    changeFieldSearchLang(lang);
    changeBG(newCoors);
    renderCity(newCity);
    renderDay(lang);
    renderWeather(currently, lang);
    renderFutureWeather(daily, getFutureDays(lang));
    setMeasure(measure);
    renderGeolocation(newCoors, lang);
    document.getElementById('townSearch').value = '';
  }
  catch (error) {
    showErrorMessage();
  }
  
}

console.log(refreshData('Minsk'))

export {tempCelsiusToFahrenheit, getCurrentDate, getFutureDays, changeBG, refreshData, setLang, setMeasure};