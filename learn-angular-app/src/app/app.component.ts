import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-angular';
  today = new Date();

  next() {
    this.today = new Date(this.today.getTime() + (24*3600*1000));
  }
}
