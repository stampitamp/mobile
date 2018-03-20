import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewStampingPage } from './new-stamping';

@NgModule({
  declarations: [
    NewStampingPage,
  ],
  imports: [
    IonicPageModule.forChild(NewStampingPage),
  ],
})
export class NewStampingPageModule {}
