import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.scss']
})
export class TemperatureChartComponent implements OnInit {
  public highcharts = Highcharts;
  public chartOptions: Highcharts.Options;
  public temperatureData = [7.0, 18.2, 26.5, 13.9];
  public colors = {
    warn: '#d64b2f',
    gold: '#F4BF4A',
    purple: '#a87ce2',
    lightGreen: '#69C480',
    primaryDefault: '#23325A',
  };
  public crosshair: any;
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      colors: ['#102D57'],
      title: {
        text: '',
      },
      legend: {
        enabled: false
      },
      tooltip: {
        headerFormat: '',
        useHTML: true,
        backgroundColor: '#FFFFFF',
        borderColor: 'transparent',
        pointFormat: '<span><b>{point.y} °C</b></span>',
        style: {
          color: '#3069FE',
          fontSize: '1rem'
        },
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        labels: {
          style: {
            color: '#AEB3B6',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '1rem'
          }
        },
        crosshair: {
          width: 2,
          color: '#3069FE',
          dashStyle: 'Dash'
        }
      },
      yAxis: {
        title: {
          text: '',
        },
        labels: {
          format: '{text}°',
          style: {
            color: '#102D57',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '1.3rem'
          }
        },
      },
      series: [{
        type: 'spline',
        data: this.temperatureData,
      }],
      plotOptions: {
        series: {
          lineWidth: 5,
          marker: {
            enabled: false,
            fillColor: '#3069FE',
            lineColor: '#FFFFFF',
            lineWidth: 1,
            states: {
              hover: {
                radiusPlus: 3,
              }
            }
          },
        }
      },
    }
  }

}
