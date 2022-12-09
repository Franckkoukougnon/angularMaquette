import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sign-it',
  templateUrl: './sign-it.component.html',
  styleUrls: ['./sign-it.component.scss'],
})
export class SignItComponent {
  @Input() class: string = '';
  @Input() type: string = '';
  @Input() value: string = '';
}
