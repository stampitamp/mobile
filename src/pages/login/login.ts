import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
              public navParams: NavParams,
              public fb: FormBuilder,
              private tokenService: Angular2TokenService) {
  }

  ngOnInit() {
    if(this.tokenService.userSignedIn()){
      this.navCtrl.setRoot('MenuPage');
    }
  }

  doLogin() {
    this.tokenService.signIn(this.loginForm.value).subscribe(
        res =>  {
          if(this.tokenService.userSignedIn()){
            this.navCtrl.setRoot('MenuPage');
          }
        },
        error => console.log(error),
    );
  }

}
