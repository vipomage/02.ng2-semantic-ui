import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiSidebarComponent } from './sui-sidebar.component';

describe('SuiSidebarComponent', () => {
  let component: SuiSidebarComponent;
  let fixture: ComponentFixture<SuiSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
