import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatComponent } from './player-stat.component';

describe('PlayerStatComponent', () => {
  let component: PlayerStatComponent;
  let fixture: ComponentFixture<PlayerStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
