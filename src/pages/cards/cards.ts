import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Restaurante,ServiceCards} from '../../providers/service-cards';
import {DetailPagePage} from '../../pages/detail-page/detail-page';

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


 restClick(index:number){
    

 this.navCtrl.push(DetailPagePage,{nombre:this.restaurante[index].nombre, imagen:this.restaurante[index].imagen,direc:this.restaurante[index].direccion,hora:this.restaurante[index].horario,likes:this.restaurante[index].likes});




 }
}
