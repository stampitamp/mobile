import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { CardsPage } from './cards';

@NgModule({
  declarations: [
    CardsPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(CardsPage),
  ],
})
export class Tab1PageModule {}
