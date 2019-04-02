import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiCalendarComponent } from './sui-calendar.component';

describe('SuiCalendarComponent', () => {
  let component: SuiCalendarComponent;
  let fixture: ComponentFixture<SuiCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
