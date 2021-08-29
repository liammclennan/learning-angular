import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'learn-angular';
  today = new Date();

  constructor(private store: Store<any>) {}

  ngOnInit() : void {
    this.store.select('today').subscribe(today => {
      this.today = today.day;
    });
  }

  next() {
    this.store.dispatch({ type: '[Today] NEXT_DAY' });
  }
}


