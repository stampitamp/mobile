import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';
import { User } from '../../providers/user/user'
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public registerForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
    passwordConfirmation: ["", Validators.required]
  });

  constructor(public navCtrl: NavController,
              public fb: FormBuilder,
              private tokenService: Angular2TokenService,
              private user: User ) {
  }

  doRegister(e) {
    this.tokenService.registerAccount(this.registerForm.value)
      .map(res => res.json()).subscribe(
        res =>  {
          this.user.safe(res, this.registerForm.value);
          this.navCtrl.setRoot('MenuPage');
        },
        error => {
          console.log(error);
          this.navCtrl.setRoot('RegisterPage');
        },
    );
  }

  switchToLogin() {
    this.navCtrl.setRoot('LoginPage');
  }

}
