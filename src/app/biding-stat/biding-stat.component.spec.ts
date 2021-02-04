import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidingStatComponent } from './biding-stat.component';

describe('BidingStatComponent', () => {
  let component: BidingStatComponent;
  let fixture: ComponentFixture<BidingStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidingStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidingStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
