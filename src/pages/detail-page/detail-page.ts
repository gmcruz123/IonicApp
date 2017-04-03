import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Reservacion,ReservationService} from '../../providers/reservation-service';
import {ReservationsPage} from '../../pages/reservations/reservations';
import {MenuPage} from '../../pages/menu/menu';
import {WorkingHoursPage} from '../../pages/working-hours/working-hours';
import {GooglePlaces} from '../../providers/google-places';
import {Mapa} from '../../providers/google-places';
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
  placeid:string;


  reservacion:Reservacion;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:ReservationService, public client:GooglePlaces) {
    this.reservacion= new Reservacion();
    this.placeid = this.navParams.get("placeid");

    this.placeid=this.navParams.get("placeid");
    client.get(this.placeid).subscribe(mapa=>this.loadMapa(mapa,null));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPagePage');
    this.nombre=this.navParams.get("nombre");
    this.imagen=this.navParams.get("imagen");
    this.likes = this.navParams.get("likes");
    this.placeid = this.navParams.get("placeid");
  }

loadMapa(mapa:Mapa, err:string){
if(err){
console.log(err);
return;}


}

reservar(){

  this.service.reservaciones.push(this.reservacion);
    this.navCtrl.push(ReservationsPage);
}

menu(){
  this.navCtrl.push(MenuPage);
}

}
