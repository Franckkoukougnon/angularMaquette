import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignItComponent } from './_components/sign-it/sign-it.component';
import { ForgetFormComponent } from './auth/forget-form/forget-form.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'register',
        component: RegisterFormComponent,
      },
      {
        path: 'forgetpassword',
        component: ForgetFormComponent,
      },

      {
        path: 'loginform',
        component: LoginFormComponent,
      },
      {
        path: 'signit',
        component: SignItComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
