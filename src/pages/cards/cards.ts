import { Component, ViewChild, NgZone } from '@angular/core';
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
              private ngZone: NgZone,
              private user: User ) {
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

  ngAfterViewInit() {
    this.content.ionScroll.subscribe((data)=> {
      if (this.content.getContentDimensions().scrollTop < 0) {
        this.tokenService.get('home.json').subscribe(

          (res) => {
            console.log('result');
            console.log(res.json());
            this.ngZone.run(() => {
              this.cards = res.json();
            });

          },
          (error) => {
            console.log(error)
          }
        )
      }
    });
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
