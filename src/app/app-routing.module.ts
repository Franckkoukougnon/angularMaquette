import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_destop/login/login.component';
import { SignItComponent } from './_destop/sign-it/sign-it.component';
import { AppMobileComponent } from './_mobile/app-mobile/app-mobile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signit',
    component: SignItComponent,
  },
  {
    path: 'appmobile',
    component: AppMobileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
