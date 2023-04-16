import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  constructor() {}

  getWeather(coordinate: number[]): Promise<any> {
    const WEATHER_API_TOKEN ='vX7P82ukLT84eGMMF74cH7VcwUXwpTTB';
    const url = `https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=${WEATHER_API_TOKEN}`;
    return fetch(url).then(response => {
      return response.json();
    });
  }

  getUserLocation(): Promise<any> {  
    const LOCATION_API_TOKEN = 'd1050c63f12f6b';
    return fetch(`https://ipinfo.io/json?token=${LOCATION_API_TOKEN}`).then(response => {
      return response.json();
    });
  }
}
