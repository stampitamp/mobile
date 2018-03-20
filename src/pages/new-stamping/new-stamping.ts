import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';
import { HttpParams } from '@angular/common/http';


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

      var requestOptions: any = {
        params: new HttpParams().set('address_id', this.address_id)
      };

      console.log('requestOptions');
      console.log(requestOptions);

      this.tokenService.get('stampings/new', requestOptions).subscribe(
        res =>  {
          console.log('get cards');
          console.log(res);
          this.cards = res.json();
        },
        error => {
          console.log('error get cards:');
          console.log(error);
        }
      );

    }
  }

  createStampings() {
    var requestOptions: any = {
      params: new HttpParams().set('address_id', this.address_id)
                              .set('count', this.stamps_count.toString())
                              .set('card_id', this.card_id)
                              .set('email_of_receiver', this.email)
    };

    console.log('requestOptions');
    console.log(requestOptions);

    this.tokenService.post('stampings', requestOptions).subscribe(
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
