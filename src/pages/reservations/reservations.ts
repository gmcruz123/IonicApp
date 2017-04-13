import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ReservationService} from '../../providers/reservation-service';
import {Reservacion} from '../../models/reservation';
import {Storage} from '@ionic/storage';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public Service:ReservationService,public storage:Storage) {
    this.reservacion=[];
    storage.get("reservas").then(data=>{
    
      console.log("RESERVAS : "+data);
    });
  }

 ionViewDidEnter() {
  
        this.storage.get("user").then((val)=>{
        this.Service.allReserva(val).subscribe(data => this.reservacion = data);
        console.log("Uusuario : "+val);

  });



  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationsPage');
  }




}
