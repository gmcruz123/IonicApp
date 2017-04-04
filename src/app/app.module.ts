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
import {MenuPage} from '../pages/menu/menu';
import {MapService} from '../providers/map-service';
import {GooglePlaces} from '../providers/google-places';
import {MapPage} from '../pages/map/map';
import {LoginService}  from '../providers/login-service';
import {RegisterPage} from '../pages/register/register';
import {PromoEventPage} from '../pages/promo-event/promo-event';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CardsPage,
    BarCardsPage,
    DetailPagePage,
    ReservationsPage,
    MenuPage,
    PromoEventPage,
    RegisterPage,
    MapPage  ],
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
    ReservationsPage,
    MenuPage,
    MapPage,
    PromoEventPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServiceCards,
    ReservationService,
    MapService,
    GooglePlaces,
    LoginService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
