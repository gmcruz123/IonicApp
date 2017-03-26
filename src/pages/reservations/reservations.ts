import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Reservacion,ReservationService} from '../../providers/reservation-service';
/*
  Generated class for the Reservations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reservations',
  templateUrl: 'reservations.html'
})
export class ReservationsPage {
  reservacion:Reservacion[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public Service:ReservationService) {
    this.reservacion=[];

  }


   ionViewDidEnter() {
    this.reservacion = this.Service.reservaciones;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationsPage');
  }




}
