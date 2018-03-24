import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewVendingSessionPage } from './new-vending-session';


@NgModule({
  declarations: [
    NewVendingSessionPage,
  ],
  imports: [
    IonicPageModule.forChild(NewVendingSessionPage),
  ],
})
export class NewVendingSessionPageModule {}
