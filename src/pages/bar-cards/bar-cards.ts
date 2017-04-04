import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServiceCards} from '../../providers/service-cards';
import {Discoteca} from '../../models/restaurantes';
import {DetailPagePage} from '../detail-page/detail-page';
import {Reservacion} from '../../models/reservation';
import {MapPage} from '../../pages/map/map';
/*
  Generated class for the BarCards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bar-cards',
  templateUrl: 'bar-cards.html'
})
export class BarCardsPage {
  discotecas : Discoteca[];
  constructor(public navCtrl: NavController
  , public navParams: NavParams
  , public service:ServiceCards) {
 
  this.discotecas=[];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarCardsPage');
  
  }

 ionViewDidEnter() {
    this.service.allDis().subscribe(data => this.discotecas = data);
  }

   restClick(index:number){
    

 this.navCtrl.push(DetailPagePage,{tipo:2,nombre:this.discotecas[index].nombre, imagen:this.discotecas[index].imagen,likes:this.discotecas[index].likes,placeid:this.discotecas[index].placeid});

   }


   mapa(index:number){

  this.navCtrl.push(MapPage,{placeid:this.discotecas[index].placeid});
}

}
