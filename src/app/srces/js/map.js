import {createFieldGeolocation} from './dom';

const minuteInOneDegree = 60;
const nameCoorsLang = {
  'en': ['latitude', 'longitude'],
  'ru': ['Широта', 'Долгота'],
  'be': ['Шырата', 'Даўгата']
}

const renderGeolocation = (loc, lang) => {
  const listNameCoordinate = nameCoorsLang[lang];

  let currentCoordinate = [];
  if (typeof(loc) === 'string') {
    currentCoordinate = loc.split(',');
  } else {
    currentCoordinate = loc;
  }
  
  const ACCESS_KEY_MAPBOX = 'pk.eyJ1IjoiamFja2Zyb3N0NTgiLCJhIjoiY2szand4cXIzMDVxNzNubXhhdzM3dGFoMSJ9.hfiE3JywpXbt2whkEdR8Ng';
  mapboxgl.accessToken = ACCESS_KEY_MAPBOX;
  
  const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [currentCoordinate[1], currentCoordinate[0]], 
    zoom: 9 
  });

  currentCoordinate.forEach( (element, index) => {
    const coordinateInDegree = Math.trunc(element);
    const coordinateInMinute = Math.trunc((element % coordinateInDegree) * minuteInOneDegree);
    createFieldGeolocation(listNameCoordinate[index], coordinateInDegree, coordinateInMinute);
  })
}

export {renderGeolocation}