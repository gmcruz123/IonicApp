import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Restaurante,ServiceCards} from '../../providers/service-cards';

/*
  Generated class for the Cards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
   
   restaurante : Restaurante[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceCards) {
    this.restaurante=[];
  }

   ionViewDidEnter() {
    this.restaurante = this.service.restaurante;
  }


}
