import {Component, OnInit} from '@angular/core';
import {weatherDatas} from '@shared/mocks/weather.mock';
import {WeatherApiService} from '@shared/weather-api/weather.api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public weatherData: any = weatherDatas;

  constructor (private weatherApiService: WeatherApiService) {}

  ngOnInit(): void {
    //TODO need request to servers
    // timer(0, 5000)
    // .pipe(
    //   switchMap(() => this.weatherApiService.getWeather()),
    //   // UntilDestroy(this)
    // )
    // .subscribe((data: any) => {
    //   this.weatherData = {...data}
    //   console.log(this.weatherData)
    // });

  }

  ngOnDestroy(): void {
    //unsub
    
  }
}
