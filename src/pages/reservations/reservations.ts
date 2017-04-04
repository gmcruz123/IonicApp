import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ReservationService} from '../../providers/reservation-service';
import {Reservacion} from '../../models/reservation';
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
    this.Service.allReserva().subscribe(data => this.reservacion = data);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationsPage');
  }




}
