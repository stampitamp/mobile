import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';


@IonicPage()
@Component({
  selector: 'page-new-vending-session',
  templateUrl: 'new-vending-session.html',
})
export class NewVendingSessionPage {

  callback: any;
  address_id: any;
  addresses: any;

  constructor(public  navCtrl: NavController,
              public  navParams: NavParams,
              private tokenService: Angular2TokenService) {
    this.callback = this.navParams.get('callback');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad new-vending-session')
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter new-vending-session')
    this.tokenService.get('vending_session/new').subscribe(
      res =>  {
        this.addresses = res.json();
        console.log('get addresses');
        console.log(this.addresses);

        if(this.addresses.length == 1) {
          this.address_id = this.addresses[0].address.id;
          this.startNewVendingSession();
        }
      },
      error => {
        console.log('error get addresses:');
        console.log(error);
      }
    );
  }

  startNewVendingSession() {
    this.callback(this.address_id).then(()=>{ this.navCtrl.pop() });
  }

  setAddressIdAndRedirectBack() {
    this.address_id = this.addresses[0].address.id;
    this.callback(this.address_id).then( ()=>{ this.navCtrl.pop() } );
  }

}
