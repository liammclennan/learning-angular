import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { ActionReducer, createAction, createReducer, on, StoreModule } from '@ngrx/store';

interface TodayState {
  date: Date
}

const appReducer = createReducer(
  {
    day: new Date()
  },
  on(createAction('[Today] NEXT_DAY'), state => {
    return {...state, day: new Date(state.day.getTime() + (24*3600*1000)) };
  })
);

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({today: appReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


