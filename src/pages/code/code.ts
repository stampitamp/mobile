import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {
  code = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private user: User) {
  }

  ionViewWillEnter() {
    this.code = this.user.data.email;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

}
