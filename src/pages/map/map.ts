import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { GooglePlaces } from '../../providers/google-places';
import { Mapa } from '../../providers/google-places';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})


export class MapPage {
  placeid: string;
  direccion: string;
  latitud: string;
  longitud: string;
  latitud1:number;
  longitud1:number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage'); 
 }


  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public client: GooglePlaces) {

    this.placeid = this.navParams.get("placeid");
    client.get(this.placeid).subscribe(mapa => this.loadMapa(mapa, null));
  
  }
  
/*servicio de google places*/

  loadMapa(mapa: Mapa, err: string) {
    if (err) {
      console.log(err);
      return;
    }
    this.direccion = mapa.direccion;
    this.latitud = mapa.latitud;
    this.longitud= mapa.longitud;
console.log("direccion: "+this.direccion)

}




/*Empieza google maps pulggin*/


// Load map only after view is initialize
ngAfterViewInit() {
}




}
