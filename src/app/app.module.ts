import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Angular2TokenService } from 'angular2-token';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    Angular2TokenService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
