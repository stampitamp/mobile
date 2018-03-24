import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';
import { User } from '../../providers/user/user';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(public navCtrl: NavController,
              public fb: FormBuilder,
              private tokenService: Angular2TokenService,
              private user: User) {
  }

  ngOnInit() {
    this.user.getUserPromise().then((user) => {
      if (user) {
        this.tokenService.signIn(user.credentials).map(res => res.json()).subscribe(
          res => {
            this.navCtrl.setRoot('MenuPage');
          },
          error => console.log('error ' + error)
        )
      }
    });

  }

  doLogin() {
    this.tokenService.signIn(this.loginForm.value).map(res => res.json()).subscribe(
        res => {
          this.user.safe(res, this.loginForm.value);
          this.navCtrl.setRoot('MenuPage');
        },
        error => console.log(error),
    );
  }

  switchToRegister() {
    this.navCtrl.setRoot('RegisterPage');
  }

}
