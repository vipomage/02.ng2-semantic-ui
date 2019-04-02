import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiSearchComponent } from './sui-search.component';

describe('SuiSearchComponent', () => {
  let component: SuiSearchComponent;
  let fixture: ComponentFixture<SuiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
