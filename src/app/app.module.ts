import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {GoogleMaps} from '@ionic-native/google-maps';
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
import {IonicStorageModule} from '@ionic/storage';
import {LocalNotifications} from '@ionic-native/local-notifications';
import {AgmCoreModule} from 'angular2-google-maps/core';


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
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD2lEljSFS9_iUzu2F8ULWes7vQv1BgDr0'
    }),
    IonicStorageModule.forRoot()
      // cuando importo l modulo puedo configurar, enviar parametros.
    
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
    GoogleMaps,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
