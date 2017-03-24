import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ServiceCards} from '../providers/service-cards';
import {CardsPage} from '../pages/cards/cards';
import {BarCardsPage} from '../pages/bar-cards/bar-cards';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CardsPage,
    BarCardsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CardsPage,
    BarCardsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServiceCards,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
