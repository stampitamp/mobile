import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab2Page } from './tab2';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    Tab2Page,
  ],
  imports: [
    IonicPageModule.forChild(Tab2Page),
    NgxQRCodeModule,
  ],
  providers: [
  ],
})
export class Tab2PageModule {}
