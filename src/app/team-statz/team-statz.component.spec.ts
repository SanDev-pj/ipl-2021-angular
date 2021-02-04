import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStatzComponent } from './team-statz.component';

describe('TeamStatzComponent', () => {
  let component: TeamStatzComponent;
  let fixture: ComponentFixture<TeamStatzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStatzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
