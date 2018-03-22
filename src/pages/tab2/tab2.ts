import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  createdCode = null;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private tokenService: Angular2TokenService) {
  }

  ionViewWillEnter() {
    this.createdCode = this.tokenService.currentUserData.email;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

}
