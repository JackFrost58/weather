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

  public value = '';
  public descriptionsConfig = [
    {
      name: 'Wind Speed',
      value: 12,
      dinamic: 2,
      dinamicState: 'more',
      unit: 'km/h',
      icon: faWind
    },
    {
      name: 'Rain Chanse',
      value: 24,
      dinamic: 10,
      dinamicState: 'less',
      unit: '%',
      icon: faCloudRain
    },
    {
      name: 'Pressure',
      value: 720,
      dinamic: 32,
      dinamicState: 'less',
      unit: 'hpa',
      icon: faWater
    },
    {
      name: 'Uv Index',
      value: 2.3,
      dinamic: 0.3,
      dinamicState: 'more',
      unit: '',
      icon: faSun
    }
  ];

  constructor(private weatherApiService: WeatherApiService) { }

  ngOnInit() {
    console.log(this.data)
    this.showWeather()
  }

  showWeather() {
    // this.weatherApiService.getWeather().subscribe((data: any) => {
    //   console.log(this.data)

    //   this.data = {...data}
    // });

  }
}
