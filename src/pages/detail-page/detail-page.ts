import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Reservacion,ReservationService} from '../../providers/reservation-service';
import {ReservationsPage} from '../../pages/reservations/reservations';
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

  reservacion:Reservacion;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:ReservationService) {
    this.reservacion= new Reservacion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPagePage');
    this.nombre=this.navParams.get("nombre");
    this.imagen=this.navParams.get("imagen");
    this.likes = this.navParams.get("likes");
    this.direccion = this.navParams.get("direc");
    this.horario = this.navParams.get("hora");


  }


reservar(){

  this.service.reservaciones.push(this.reservacion);
    this.navCtrl.push(ReservationsPage);
}


}
