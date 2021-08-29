import { Input, Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent {
  @Input() today = '';
  @Output() onNextEvent = new EventEmitter();

  onNext() {
    this.onNextEvent.emit();
  }
}
