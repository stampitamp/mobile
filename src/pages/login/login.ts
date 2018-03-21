import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userParams: any;

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
    if(this.tokenService.userSignedIn() && ! (JSON.stringify(this.navParams['data'] === JSON.stringify({})))) {
      this.navCtrl.setRoot('MenuPage', this.userParams);
    }
  }

  doLogin() {
    this.tokenService.signIn(this.loginForm.value).subscribe(
        res =>  {
          console.log(res);
          console.log(this.tokenService.userSignedIn());
          if(this.tokenService.userSignedIn()){
            this.userParams = res;
            this.navCtrl.setRoot('MenuPage', this.userParams);          }
        },
        error => console.log(error),
    );
  }

  switchToRegister() {
    this.navCtrl.setRoot('RegisterPage');
  }

}
