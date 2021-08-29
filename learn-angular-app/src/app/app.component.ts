import { Component, OnInit } from '@angular/core';
import { createAction, createReducer, on, Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'learn-angular';
  today = new Date(2000,1,1);

  constructor(private store: Store<{today: TodayState}>) {}

  ngOnInit() : void {
    this.store.select('today').subscribe(today => {
      this.today = today.day;
    });
  }

  next() {
    this.store.dispatch({ type: '[Today] NEXT_DAY' });
  }
}

export interface TodayState {
  day: Date
}

export const appReducer = createReducer<TodayState>(
  {
    day: new Date()
  },
  on(createAction('[Today] NEXT_DAY'), state => {
    return {...state, day: new Date(state.day.getTime() + (24*3600*1000)) };
  })
);
