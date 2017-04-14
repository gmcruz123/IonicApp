import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServiceCards} from '../../providers/service-cards';
import {Restaurante} from '../../models/restaurantes';
import {DetailPagePage} from '../../pages/detail-page/detail-page';
import {MapPage} from '../../pages/map/map';
import {Storage} from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceCards, public storage:Storage) {
    this.restaurante=[];


    this.storage.get("logged").then(val=>console.log("logged :"+val));
    this.storage.get("userdata").then(vale=>console.log("userstorage:"+vale));
  }

   ionViewDidEnter() {
    this.service.allRes().subscribe(data => this.restaurante = data);


   }

 restClick(index:number){
    

 this.navCtrl.parent.push(DetailPagePage,{tipo:1,nombre:this.restaurante[index].nombre, imagen:this.restaurante[index].imagen,likes:this.restaurante[index].likes,placeid:this.restaurante[index].placeid});
}

mapa(index:number){

  this.navCtrl.parent.push(MapPage,{placeid:this.restaurante[index].placeid});
}

}
