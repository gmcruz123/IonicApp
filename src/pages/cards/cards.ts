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
    body1:number;   
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


likes(index:number){

 this.body1= this.restaurante[index].likes +1;
let body ={likes:this.body1};
this.service.allRes().subscribe(data => this.restaurante = data);

let nom = this.restaurante[index].nombre;
this.service.Put(nom,body).subscribe(res => {
     
      console.log(JSON.stringify(res));
      if (res.success) {
  
      } else {
       /* this.toastCtrl.create({ message: "Reserva no ingresada", duration: 3000 }).present();
      */}

    }, err => {
      console.log(JSON.stringify(err));
    });

}


}
