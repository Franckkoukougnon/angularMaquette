import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { SignItComponent } from './_components/sign-it/sign-it.component';

import { LogoAvatarComponent } from './_components/logo-avatar/logo-avatar.component';
import { ImageViewComponent } from './_components/image-view/image-view.component';
import { InputComponent } from './_components/input/input.component';
import { InputContainerComponent } from './_components/input-container/input-container.component';
import { ButtonComponent } from './_components/button/button.component';
import { AuthComponent } from './auth/auth.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignItComponent,
    LogoAvatarComponent,
    ImageViewComponent,
    InputComponent,
    InputContainerComponent,
    ButtonComponent,
    AuthComponent,
    LoginFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
