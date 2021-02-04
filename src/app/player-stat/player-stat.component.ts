import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IplApiDataService } from '../ipl-api-data.service';
import { MatPaginator, MatOption, PageEvent } from '@angular/material';
declare let google: any;
@Component({
  selector: 'app-player-stat',
  templateUrl: './player-stat.component.html',
  styleUrls: ['./player-stat.component.css']
})
export class PlayerStatComponent implements OnInit {
  screen_width: number;
  lowValue = 0;
  highValue = 5;
  rowsOnPage=5;
team_labels=[];
team_label='Select Team';
dataSource = [];
displayedColumns: string[] = ['si','name','role','team','price'];
pie_chart_data=[];
// @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;

public getPaginatorData(event: PageEvent): PageEvent {
  this.lowValue = event.pageIndex * event.pageSize;
  this.highValue = this.lowValue + event.pageSize;
  return event;
}
  constructor(private se:IplApiDataService) { 
    this.screen_width = window.innerWidth;
  }

  ngOnInit() {
    this.se.get_Team_labels().subscribe(data=>{
      this.team_labels=data['labels']
      // console.log(this.team_labels)
    })
    google.charts.load('1.0', { 'packages': ['corechart', 'bar', 'line','pie'] });
  }
  get_players_data_of_selected_team(){
    // console.log(this.team_label)
    if(this.team_label!='Select Team'){
      this.se.get_player_details(this.team_label).subscribe(data=>{
       this.dataSource=data;
      })
      this.se.get_players_pie_chart_data(this.team_label).subscribe(data=>{
      this.pie_chart_data=data;
      this.drawChart();
      })
    }
  }
  drawChart() {
    google.charts.setOnLoadCallback(this.draw());
  }
  draw(){
    let k=JSON.parse(JSON.stringify(this.pie_chart_data,['role','count']))
    console.log(k)
    let pie_data = k.map(d => Array.from(Object.values(d)));
    pie_data.unshift(['role', 'count']);
    console.log(pie_data)
    var data = google.visualization.arrayToDataTable(pie_data);
    var options={
      width: '600',
      height: '400',
      theme: 'material',
      legend: { position: 'bottom' },
          is3D: true,
    };
    setTimeout(() => {
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }, 10);
  }
  
  onResize(value) {
    this.screen_width = window.innerWidth;
    this.drawChart();
  }
}
