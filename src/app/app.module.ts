import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_destop/login/login.component';
import { UserLoginComponent } from './_destop/user-login/user-login.component';
import { UserPasswordComponent } from './_destop/user-password/user-password.component';
import { SignItComponent } from './_destop/sign-it/sign-it.component';
import { AppMobileComponent } from './_mobile/app-mobile/app-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserLoginComponent,
    UserPasswordComponent,
    SignItComponent,
    AppMobileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
