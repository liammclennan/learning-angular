import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './pages/day/today/today.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { DayComponent, dayReducer } from './pages/day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    HomeComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({today: dayReducer}),
    StoreDevtoolsModule.instrument({
      name: 'Learning Angular',
      logOnly: environment.production
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'day/:datestring', component: DayComponent }
    ]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


