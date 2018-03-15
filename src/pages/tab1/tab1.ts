import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';


@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  cards: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tokenService: Angular2TokenService ) {
  }

  ngOnInit() {
    console.log('onInit');

    this.tokenService.get('home.json').subscribe(

      (res) => {
        console.log('result');
        console.log(res.json());
        this.cards = res.json();
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

  doLogout() {
    this.tokenService.signOut();
    this.navCtrl.setRoot('LoginPage');
  }

}
