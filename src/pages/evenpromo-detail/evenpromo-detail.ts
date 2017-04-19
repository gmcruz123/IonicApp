import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the EvenpromoDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-evenpromo-detail',
  templateUrl: 'evenpromo-detail.html'
})
export class EvenpromoDetailPage {
nombre:string;
imagen:string;
info:string;
cover:number;
type:String;
hora:string;
fecha:Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPagePage');
    this.nombre = this.navParams.get("nombre");
    this.imagen = this.navParams.get("imagen");
    this.info = this.navParams.get("info");
    this.cover= this.navParams.get("cover");
    this.type= this.navParams.get("type");
    this.hora = this.navParams.get("hora");
    this.fecha = this.navParams.get("fecha");
}



}

