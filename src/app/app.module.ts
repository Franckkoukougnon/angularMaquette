import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_destop/login/login.component';

import { SignItComponent } from './_destop/sign-it/sign-it.component';
import { AppMobileComponent } from './_mobile/app-mobile/app-mobile.component';
import { LogoAvatarComponent } from './_destop/logo-avatar/logo-avatar.component';
import { ImageViewComponent } from './_destop/image-view/image-view.component';
import { InputComponent } from './_destop/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    SignItComponent,
    AppMobileComponent,
    LogoAvatarComponent,
    ImageViewComponent,
    InputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
