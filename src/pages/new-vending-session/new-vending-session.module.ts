import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewVendingSessionPage } from './new-vending-session';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    NewVendingSessionPage,

  ],
  imports: [
    IonicPageModule.forChild(NewVendingSessionPage),
    HttpClientModule
  ],
})
export class NewVendingSessionPageModule {}
