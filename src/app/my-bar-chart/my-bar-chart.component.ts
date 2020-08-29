import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011','2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data : [65,59,80,25,30,68,89], label: 'Series A'},
    {data : [28,78,53,34,90,78,10], label: 'Series B'},
    {data : [35,50,40,67,10,48,67], label: 'Series C'}
    
  ]

  constructor() { } 

  ngOnInit(): void {
  }

}
