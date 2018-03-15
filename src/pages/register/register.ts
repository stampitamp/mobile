import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';


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
              public navParams: NavParams,
              public fb: FormBuilder,
              private tokenService: Angular2TokenService) {
  }

  ngOnInit() {
    if(this.tokenService.userSignedIn()){
      this.navCtrl.setRoot('MenuPage');
    }
  }

  doRegister(e) {
    console.log(e);
    this.tokenService.registerAccount(this.registerForm.value).subscribe(
        res =>  {
          console.log(res);
          console.log(this.tokenService.userSignedIn());
          if(this.tokenService.userSignedIn()){
            this.navCtrl.setRoot('MenuPage');
          }
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
