import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    ReactiveFormsModule,
    HttpModule,
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
