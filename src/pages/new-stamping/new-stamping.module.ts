import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewStampingPage } from './new-stamping';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    NewStampingPage,
  ],
  imports: [
    IonicPageModule.forChild(NewStampingPage),
  ],
  providers: [
    BarcodeScanner,
  ],
})
export class NewStampingPageModule {}
