import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';
import { App } from 'ionic-angular/components/app/app';
import { User } from '../../providers/user/user'



@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})

export class CardsPage {

  cards: any;

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController,
              public app: App,
              public navParams: NavParams,
              private tokenService: Angular2TokenService,
              private user: User ) {
  }

  ionViewWillEnter() {
    this.fetchCards();
  }

  toggleMenu() {
    this.ionViewWillEnter();
  }

  fetchCards(event?) {
    this.tokenService.get('home.json').subscribe(

      (res) => {
        this.cards = res.json();
        if (event) {
          event.complete();
        }
      },
      (error) => {
        if (event) {
          event.complete();
        }
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

  doLogout() {
    this.tokenService.signOut();
    this.user.remove();
    this.app.getRootNav().setRoot('LoginPage');
  }

}
