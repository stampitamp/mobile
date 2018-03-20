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
        this.address_id = res.json().address_id;
        console.log('get address_id: ' + this.address_id);
        if(this.address_id){
          this.callback(this.address_id).then( ()=>{ this.navCtrl.pop() } );
        } else {
          this.addresses = res.json();
        }
      },
      error => {
        console.log('error get:');
        console.log(error);
      }
    );
  }

  startNewVendingSession() {
    this.callback(this.address_id).then(()=>{ this.navCtrl.pop() });
  }

}
