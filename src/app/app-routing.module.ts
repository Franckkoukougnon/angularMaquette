import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignItComponent } from './_components/sign-it/sign-it.component';
import { ForgetFormComponent } from './_pages/forget-form/forget-form.component';
import { LoginFormComponent } from './_pages/login-form/login-form.component';
import { RegisterFormComponent } from './_pages/register-form/register-form.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: 'forgetpassword',
    component: ForgetFormComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'loginform',
    component: LoginFormComponent,
  },

  {
    path: 'signit',
    component: SignItComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
