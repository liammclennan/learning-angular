import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createAction, createReducer, on, Store } from '@ngrx/store';

export interface TodayState {
  day: Date
}
const nextDayAction = createAction('[Today] NEXT_DAY');

export const dayReducer = createReducer<TodayState>(
  {
    day: new Date()
  },
  on(nextDayAction, state => {
    return {...state, day: new Date(state.day.getTime() + (24*3600*1000)) };
  })
);

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  today = "";

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() : void {
    this.today = this.route.snapshot.paramMap.get('datestring') || '';
  }

  next() {
    
  }

}
