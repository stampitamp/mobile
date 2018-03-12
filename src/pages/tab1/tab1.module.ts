import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { Tab1Page } from './tab1';

@NgModule({
  declarations: [
    Tab1Page,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(Tab1Page),
  ],
})
export class Tab1PageModule {}
