import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IplApiDataService {
  get_Team_labels(): Observable<any> {
    return this.http.get<any>('https://ipl-2021-data-visualization.herokuapp.com/team/team_labels');
  }
  get_player_details(label):Observable<any>{
    return this.http.get<any>('https://ipl-2021-data-visualization.herokuapp.com/team/get_players/'+label);
  }
  get_team_details(): Observable<any>{
    return this.http.get<any>('https://ipl-2021-data-visualization.herokuapp.com/team/team_details');
  }
  get_sorted_player_details():Observable<any>{
    return this.http.get<any>('https://ipl-2021-data-visualization.herokuapp.com/team/sorted_player_details');
  }
  get_count_players_by_role_details():Observable<any>{
    return this.http.get<any>('https://ipl-2021-data-visualization.herokuapp.com/team/count_players_role_wise');
  }
  get_Amount_spent_by_each_team():Observable<any>{
    return this.http.get<any>('https://ipl-2021-data-visualization.herokuapp.com/team/amount_spent_by_each_team');
  }
  get_amount_spent_by_role_of_given_team(label):Observable<any>{
    return this.http.get<any>('https://ipl-2021-data-visualization.herokuapp.com/team/amount_spent_by_role_Given_team/'+label);
  }
  get_players_pie_chart_data(label):Observable<any>{
    return this.http.get<any>('https://ipl-2021-data-visualization.herokuapp.com/team/get_pie_chart_data/'+label);
  }
  login(data):Observable<any>{
    return this.http.post<any>('https://ipl-2021-data-visualization.herokuapp.com/auth',data);
  }
  get_user_data(token):Observable<any>{
    // const headers= new HttpHeaders()
    // .set('Authorization', 'JWT '+token)
    return this.http.get<any>('http://127.0.0.1:5000/protected',{headers:new HttpHeaders().append('Authorization', 'JWT '+token)});
  }
  constructor(private http: HttpClient) { }
}
