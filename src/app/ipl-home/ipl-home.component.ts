import { Component, OnInit } from '@angular/core';
import { IplApiDataService } from '../ipl-api-data.service';

@Component({
  selector: 'app-ipl-home',
  templateUrl: './ipl-home.component.html',
  styleUrls: ['./ipl-home.component.css']
})
export class IplHomeComponent implements OnInit {

  constructor(private se:IplApiDataService) { }

  ngOnInit() {

  }
try_login(){
  this.se.login({ "username": "user1", "password": "abcxyz"}).subscribe(data=>{
    console.log(data.access_token)
    if(data.access_token){
      this.se.get_user_data(data.access_token).subscribe(d=>{
        console.log(d)
      })

    }
  })
}
}
