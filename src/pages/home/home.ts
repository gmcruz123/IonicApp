import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PromoEventPage} from '../../pages/promo-event/promo-event';
import {LoginPage} from '../../pages/login/login';
import {CardsPage} from '../../pages/cards/cards';
import {BarCardsPage} from '../../pages/bar-cards/bar-cards';
import {ReservationsPage} from '../../pages/reservations/reservations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  menuOpc: IMenu[] = [

    { label: 'Inicio', icon: 'home' },
    { label: 'Restaurantes / bar', icon: 'md-beer' },
    { label: 'Discotecas', icon: 'md-pizza' },
    { label: 'Reservaciones', icon: 'md-restaurant' },

  ]

  mainContent: any;

  constructor(public navCtrl: NavController/*, public storage:Storage*/) {
    this.mainContent = PromoEventPage;
/*    storage.get("user").then( val =>{ console.log(val.user) });*/
  }

  selectMenu(index: number) {
    switch(index){
      case 0 : this.mainContent = PromoEventPage;
      break;
      case 1 : this.mainContent = CardsPage;
      break;
      case 2 : this.mainContent = BarCardsPage;
      break;
      case 3 : this.mainContent = ReservationsPage;
      break;
      default: this.mainContent = LoginPage;
    }


  }

  logout() {
/*    this.storage.set("logged", false);*/
    this.navCtrl.setRoot(LoginPage);
  }


}



export interface IMenu {
  label: string;
  icon: string;
} 
