import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sign-it',
  templateUrl: './sign-it.component.html',
  styleUrls: ['./sign-it.component.scss'],
})
export class SignItComponent {
  @Input() type: string = '';
  @Input() value: string = '';
  signGoogle() {
    alert('Inscrivez-vous!!!');
  }
}
