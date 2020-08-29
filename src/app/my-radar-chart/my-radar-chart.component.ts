import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css']
})
export class MyRadarChartComponent implements OnInit {

  public radarChartData = [{data: [90, 150, 200, 45], label: '2017'},
                          {data: [40, 60, 30, 39], label: '2018'},
                          {data: [90, 130, 30, 70], label: '2019'}];
  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartType = 'radar';
  constructor() { }

  ngOnInit(): void {
  }

}
