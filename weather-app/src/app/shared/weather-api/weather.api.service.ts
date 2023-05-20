import {HttpClient, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject, merge, timer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  // public weather$ = new Subject<void>();
  // act = merge(timer(0, 1000), this.weather$)
  constructor(private http: HttpClient) {}

  public getUserLocation() {  
    const LOCATION_API_TOKEN = 'd1050c63f12f6b';
    const url = `https://ipinfo.io/json?token=${LOCATION_API_TOKEN}`;

    return {
      ip: "178.126.241.79",
      hostname: "mm-79-241-126-178.vitebsk.dynamic.pppoe.byfly.by",
      city: "Vitebsk",
      region: "Vitebsk",
      country: "BY",
      loc: "55.1352,30.1529",
      org: "AS6697 Republican Unitary Telecommunication Enterprise Beltelecom",
      postal: "211301",
      timezone: "Europe/Minsk"
    }
    // return this.http.get(url);
  }

  public getWeather() {
    //TODO tomorrow api
    // const WEATHER_API_TOKEN ='vX7P82ukLT84eGMMF74cH7VcwUXwpTTB';
    // const url = `https://api.tomorrow.io/v4/weather/realtime?location=orsha&apikey=${WEATHER_API_TOKEN}`
    // const dinamicWeatherOneHoursStepRequest = `https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=${WEATHER_API_TOKEN}`;

    //TODO weather api
    // const token = '31afb664f73741ab8c0194503231604';
    // const url = `https://api.weatherapi.com/v1/forecast.json?key=${token}&q=Orsha&days=3`
   
    const token = '535ed68b320a6988325753be610d8eaa';
    const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${token}`
    // const url = `http://api.openweathermap.org/geo/1.0/direct?q=Orsha&limit=5&appid=535ed68b320a6988325753be610d8eaa`
    return this.http.get(url);
  }
}
