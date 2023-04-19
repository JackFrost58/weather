import {Component, Input, OnInit} from '@angular/core';
import {WeatherApiService} from 'src/app/shared/weather-api/weather.api.service';

@Component({
  selector: 'weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {
  @Input() data: any;

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
