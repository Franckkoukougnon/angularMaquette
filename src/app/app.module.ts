import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
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
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConnexionComponent } from './_pages/connexion/connexion.component';
import { ForgetpasswordComponent } from './_pages/forgetpassword/forgetpassword.component';
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
    RegisterFormComponent,
    ConnexionComponent,
    ForgetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
