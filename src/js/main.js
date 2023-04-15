import '../styles/style.scss';
import 'weather-icons/css/weather-icons.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import 'material-design-icons/iconfont/material-icons.css';

import { searchCity } from './event';
import { init } from '.';


init();
searchCity();