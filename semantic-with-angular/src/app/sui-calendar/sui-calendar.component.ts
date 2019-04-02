import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sui-calendar',
  templateUrl: './sui-calendar.component.html',
  styleUrls: ['./sui-calendar.component.css']
})
export class SuiCalendarComponent implements OnInit {

  date;
  mode;
  firstDayOfWeek;
  datepickerModes = ["datetime", "date", "time", "month", "year"];
  constructor() { }

  @Input('ngModel')

  ngOnInit() {

  }

}
