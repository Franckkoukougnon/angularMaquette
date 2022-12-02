import { Component, OnInit } from '@angular/core';
import { InputUser } from 'src/app/models/input.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myUser!: InputUser;
  ngOnInit(): void {
    this.myUser = new InputUser('Votre nom', 'votre mot de passe ');
  }
}
