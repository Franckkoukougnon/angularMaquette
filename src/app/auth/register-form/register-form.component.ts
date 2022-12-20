import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  title = 'register-form';

  registerForm!: FormGroup;
  numberPhone: any;
  first: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registerForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(4), Validators.maxLength(6)]],
      phones: this.formBuilder.array([]),
    });
    this.addPhone();
  }

  get username() {
    return this.registerForm.get('username');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get phones() {
    return this.registerForm.get('phones') as FormArray;
  }

  get password() {
    return this.registerForm.get('password');
  }

  addPhone() {
    let phone = this.formBuilder.group({
      phonePrefix: '',
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]{9}'),
        ],
      ],
    });

    if (this.phones.length < 3) this.phones.push(phone);
    console.log(this.phones);
  }
  getPhoneNumber(index: number) {
    return this.phones.controls[index].get('phoneNumber');
  }
  getPhonePrefix(index: number) {
    return this.phones.controls[index].get('phonePrefix');
  }
  deletePhone(index: number) {
    this.phones.removeAt(index);
  }
  submit() {
    if (!this.registerForm.valid) {
      alert(' Form not valid, please check and try again.');
      return;
    }
    alert('Successfully Registered');
  }
}
