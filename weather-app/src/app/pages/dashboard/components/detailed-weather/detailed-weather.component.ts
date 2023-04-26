import {Component, OnInit} from '@angular/core';
import {faSun} from '@fortawesome/free-solid-svg-icons';
import {faCloud} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss']
})
export class DetailedWeatherComponent implements OnInit {
  public faCloud = faCloud;
  public dayStateConfig = [
    {
      title: 'Sunrise',
      icon: 'cloudy'
    },
    {
      title: 'Sunset',
      icon: 'sunny_snowing'
    }
  ]
  public items = [
    {
      time: '7 PM',
      progress: 44
    },
    {
      time: '8 PM',
      progress: 30
    },
    {
      time: '9 PM',
      progress: 67
    },
    {
      time: '10 PM',
      progress: 72
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
