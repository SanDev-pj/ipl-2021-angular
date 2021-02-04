import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IplHomeComponent } from './ipl-home/ipl-home.component';
import { PlayerStatComponent } from './player-stat/player-stat.component';
import { TeamStatzComponent } from './team-statz/team-statz.component';
import { BidingStatComponent } from './biding-stat/biding-stat.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { MaterialModule } from './material.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
// import {} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
export const routes =  [
  { path: 'home', component: IplHomeComponent, label: 'Home' },
  { path: 'Player_Statictics', component: PlayerStatComponent, label: 'Player Statictics' },
  { path: 'Team_Statictics', component: TeamStatzComponent, label: 'Team Statictics' },
  { path: 'Biding_Statictics', component: BidingStatComponent, label: 'Biding Statictics' }
 ];
@NgModule({
  declarations: [
    AppComponent,
    IplHomeComponent,
    PlayerStatComponent,
    TeamStatzComponent,
    BidingStatComponent


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),CdkTableModule,CdkTreeModule,MatCardModule,MatPaginatorModule,MatTableModule,MatSelectModule,MatFormFieldModule,MatInputModule,HttpClientModule,MatIconModule,MatToolbarModule,MatListModule,MatSidenavModule, BrowserAnimationsModule, ReactiveFormsModule, BrowserModule, FormsModule,
  ],
  
  providers: [{ provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
