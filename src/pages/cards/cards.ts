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
	selectedCard: any;

	@ViewChild(Content) content: Content;

	constructor(public navCtrl: NavController,
		public app: App,
		public navParams: NavParams,
		private tokenService: Angular2TokenService,
		private ngZone: NgZone,
		private user: User) {
	}

	ionViewWillEnter() {
		this.fetchCards();
	}

	toggleMenu() {
		this.ionViewWillEnter();
	}

	fetchCards() {
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

	fetchCardsOnRefresh(event?) {
		this.tokenService.get('home.json').subscribe(

			(res) => {
				this.cards = res.json();
				event.complete();
			},
			(error) => {
				console.log(error)
				event.complete();
			}
		)
	}

	selectCard(index: number) {
		this.selectedCard = this.cards[index];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Tab1Page');
	}

}
