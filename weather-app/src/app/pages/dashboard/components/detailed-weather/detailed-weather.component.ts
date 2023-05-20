import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss']
})
export class DetailedWeatherComponent implements OnInit {
  public time = new Date();

  public dayStateConfig = [
    {
      title: 'Sunrise',
      icon: 'wi-sunrise'
    },
    {
      title: 'Sunset',
      icon: 'wi-sunset'
    }
  ];

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
  ];

  constructor() {
    setInterval(() => {
      this.time = new Date();
    })
  }

  ngOnInit(): void {}
}
