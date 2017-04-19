import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EventsPage} from '../../pages/events/events';
import {LoginPage} from '../../pages/login/login';
import {CardsPage} from '../../pages/cards/cards';
import {BarCardsPage} from '../../pages/bar-cards/bar-cards';
import {ReservationsPage} from '../../pages/reservations/reservations';
import {Storage} from '@ionic/storage';
import {PromoPage} from '../../pages/promo/promo';

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
    { label: 'Promociones', icon: 'md-cash'},
  ]

  mainContent: any;

  constructor(public navCtrl: NavController, public storage:Storage) {
    this.mainContent = EventsPage;


/*    storage.get("user").then( val =>{ console.log(val.user) });*/
  }

  selectMenu(index: number) {
    switch(index){
      case 0 : this.mainContent = EventsPage;
      break;
      case 1 : this.mainContent = CardsPage;
      break;
      case 2 : this.mainContent = BarCardsPage;
      break;
      case 3 : this.mainContent = ReservationsPage;
      break;
      case 4: this.mainContent = PromoPage;
      break;

      default : this.mainContent= LoginPage;
      break;
    }


  }

  logout() {
/*    this.storage.set("logged", false);*/
    this.navCtrl.setRoot(LoginPage);
    this.storage.set("logged",false);
    this.storage.get("logged").then(val=>console.log("logged"+val));
  }


}



export interface IMenu {
  label: string;
  icon: string;
} 
