import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { IplApiDataService } from '../ipl-api-data.service';

@Component({
  selector: 'app-biding-stat',
  templateUrl: './biding-stat.component.html',
  styleUrls: ['./biding-stat.component.css']
})
export class BidingStatComponent implements OnInit {
  lowValue = 0;
  highValue = 5;
  rowsOnPage=5;
  dataSource = [];
  displayedColumns: string[] = ['si','name','label','role','price'];
  count_players_role_wise=[];
  amount_spent_by_each_team=[];
  amount_spent_by_role_of_given_team=[];
  team_labels=[];
team_label='Select Team';

  constructor(private se:IplApiDataService) { }
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
  ngOnInit() {
    this.se.get_Team_labels().subscribe(data=>{
      this.team_labels=data['labels']
    })
    this.se.get_sorted_player_details().subscribe(data=>{
      this.dataSource=data
    })
    this.se.get_count_players_by_role_details().subscribe(data=>{
      this.count_players_role_wise=data;
    })
    this.se.get_Amount_spent_by_each_team().subscribe(data=>{
      this.amount_spent_by_each_team=data;
    })

  }
  get_amount_spent_role_wise_after_selecting_team(){
    if(this.team_label!='Select Team'){
      this.se.get_amount_spent_by_role_of_given_team(this.team_label).subscribe(data=>{
        this.amount_spent_by_role_of_given_team=data;
      })
    }
  }
}
