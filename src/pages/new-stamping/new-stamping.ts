import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


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
  scannedCode: string = "";

  constructor(public  navCtrl: NavController,
              public  navParams: NavParams,
              private tokenService: Angular2TokenService,
              private barcodeScanner: BarcodeScanner) {
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

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      this.createStampings();
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  stampCountUp() {
    this.stamps_count++;
  }

  stampCountDown() {
    this.stamps_count--;
  }

  private

  createStampings() {
    const params =  { count:       this.stamps_count,
                      card_id:     this.card_id,
                      address_id:  this.address_id,
                      email:       this.scannedCode,
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

  getAdressId = (address_id) => {
    return new Promise((resolve, reject) => {
      this.address_id = address_id;
      resolve();
    });
  };

  resetView() {
    this.stamps_count = 1;
    this.card_id = -1;
    this.scannedCode = "";
  }

}
