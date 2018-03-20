import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';


@IonicPage()
@Component({
  selector: 'page-new-stamping',
  templateUrl: 'new-stamping.html',
})
export class NewStampingPage {

  address_id: any;
  stamps_count: 1;
  card_id: any = -1;
  cards: any;
  email: string = '';

  constructor(public  navCtrl: NavController,
              public  navParams: NavParams,
              private tokenService: Angular2TokenService) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter: new-stamping');
    this.resetView();

    if(!this.address_id) {
      this.navCtrl.push('NewVendingSessionPage', { callback: this.getAdressId });
    } else {

      this.tokenService.get('stampings/new/?address_id=' + this.address_id).subscribe(
        res =>  {
          console.log('get new stamping cards');
          console.log(res);
          this.cards = res.json();
        },
        error => {
          console.log('error get new stamping cards:');
          console.log(error);
        }
      );

    }
  }

  createStampings() {

    const params =  { count:       this.stamps_count,
                      card_id:     this.card_id,
                      address_id:  this.address_id,
                      email:       this.email,
                    }

    this.tokenService.post('stampings', params ).subscribe(
      res =>  {
        console.log('post stampings');
        console.log(res);
      },
      error => {
        console.log('error post:');
        console.log(error);
      }
    );
    this.resetView();
  }

  stampCountUp() {
    this.stamps_count++;
  }

  stampCountDown() {
    this.stamps_count--;
  }

  private

  getAdressId = (address_id) =>
  {
    return new Promise((resolve, reject) => {
      this.address_id = address_id;
      resolve();
    });
  };

  resetView() {
    this.stamps_count = 1;
    this.card_id = -1;
    this.email="";
  }

}
