import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';


/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tokenService: Angular2TokenService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

  doLogout() {
    this.tokenService.signOut();
    this.navCtrl.setRoot('LoginPage');
  }

}
