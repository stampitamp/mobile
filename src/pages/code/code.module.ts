import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodePage } from './code';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    CodePage,
  ],
  imports: [
    IonicPageModule.forChild(CodePage),
    NgxQRCodeModule,
  ],
  providers: [
  ],
})
export class CodePageModule {}
