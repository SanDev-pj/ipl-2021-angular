import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IplApiDataService } from '../ipl-api-data.service';
import { PageEvent } from '@angular/material';
declare let google: any;
@Component({
  selector: 'app-team-statz',
  templateUrl: './team-statz.component.html',
  styleUrls: ['./team-statz.component.css']
})
export class TeamStatzComponent implements OnInit {
  screen_width: number;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['si','label','team','home_ground','coach','city','captain'];
  amount_spent_by_each_team=[];
  lowValue = 0;
  highValue = 5;
  rowsOnPage=5;
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
  constructor(private se:IplApiDataService) { 
    google.charts.load('1.0', { 'packages': ['corechart', 'bar', 'line','pie','ColumnChart'] });
    this.screen_width = window.innerWidth;
  }

  ngOnInit() {
    
   this.se.get_team_details().subscribe(data=>{
     this.dataSource.data=data
   })
   this.se.get_Amount_spent_by_each_team().subscribe(data=>{
    this.amount_spent_by_each_team=data;
    this.drawChart();
  })
  }
  drawChart() {
    google.charts.setOnLoadCallback(this.draw());
  }
  draw(){
    let bar_data = this.amount_spent_by_each_team.map(d => Array.from(Object.values(d)));
    bar_data.unshift(['team', 'amount']);
    console.log(bar_data)
    var data = google.visualization.arrayToDataTable(bar_data);
    var options={
      width: '650',
      height: '350',
      theme: 'material',
      legend: { position: 'bottom' }
    };
    setTimeout(() => {
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      var formatter = new google.visualization.NumberFormat({ prefix: '₹', negativeColor: 'red', negativeParens: true });
      formatter.format(data, 1);
      // formatter.format(data, 2);
      chart.draw(data, options);
    }, 5);
  }
  
  onResize(value) {
    this.screen_width = window.innerWidth;
    this.drawChart();
  }
}
