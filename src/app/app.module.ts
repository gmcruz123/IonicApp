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
import {DetailPagePage} from '../pages/detail-page/detail-page';
import {ReservationService} from '../providers/reservation-service';
import {ReservationsPage} from '../pages/reservations/reservations';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CardsPage,
    BarCardsPage,
    DetailPagePage,
    ReservationsPage
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
    BarCardsPage,
    DetailPagePage,
    ReservationsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServiceCards,
    ReservationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
