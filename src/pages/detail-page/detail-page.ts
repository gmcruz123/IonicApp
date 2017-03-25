import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-page',
  templateUrl: 'detail-page.html'
})
export class DetailPagePage {
  nombre:string;
  imagen:string;
  likes:number;
  direccion:string;
  horario:string;
  title:string ="Reservar";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPagePage');
    this.nombre=this.navParams.get("nombre");
    this.imagen=this.navParams.get("imagen");
    this.likes = this.navParams.get("likes");
    this.direccion = this.navParams.get("direc");
    this.horario = this.navParams.get("hora");


  }


}
