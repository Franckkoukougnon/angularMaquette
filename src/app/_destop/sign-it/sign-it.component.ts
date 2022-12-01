import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-it',
  templateUrl: './sign-it.component.html',
  styleUrls: ['./sign-it.component.scss'],
})
export class SignItComponent {
  signGoogle() {
    alert('Inscrivez-vous!!!');
  }
}
