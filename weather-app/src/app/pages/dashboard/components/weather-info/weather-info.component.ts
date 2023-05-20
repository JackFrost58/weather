import {Component, Input, OnInit} from '@angular/core';
import {faCloudRain, faSun, faWater, faWind} from '@fortawesome/free-solid-svg-icons';
import {WeatherApiService} from 'src/app/shared/weather-api/weather.api.service';

@Component({
  selector: 'weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {
  @Input() data: any;

  public currentDate = new Date();
  public value = '';
  public descriptionsConfig = [
    {
      name: 'Wind Speed',
      value: 12,
      dinamic: 2,
      dinamicState: 'more',
      unit: 'km/h',
      icon: 'wi-strong-wind'
    },
    {
      name: 'Rain Chanse',
      value: 24,
      dinamic: 10,
      dinamicState: 'less',
      unit: '%',
      icon: 'wi-rain'
    },
    {
      name: 'Pressure',
      value: 720,
      dinamic: 32,
      dinamicState: 'less',
      unit: 'hpa',
      icon: 'wi-barometer'
    },
    {
      name: 'Uv Index',
      value: 2.3,
      dinamic: 0.3,
      dinamicState: 'more',
      unit: '',
      icon: 'wi-day-sunny'
    }
  ];

  constructor(private weatherApiService: WeatherApiService) {
    setInterval(()=> {
      this.currentDate = new Date();
    }, 5000)
  }

  ngOnInit(): void {
    console.log(this.data)
    this.showWeather()
  }

  public showWeather() {
    // this.weatherApiService.getWeather().subscribe((data: any) => {
    //   console.log(this.data)

    //   this.data = {...data}
    // });
  }
}
