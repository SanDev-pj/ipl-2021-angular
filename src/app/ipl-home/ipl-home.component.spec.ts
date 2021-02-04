import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IplHomeComponent } from './ipl-home.component';

describe('IplHomeComponent', () => {
  let component: IplHomeComponent;
  let fixture: ComponentFixture<IplHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IplHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IplHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
