import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { GooglePlaces } from '../../providers/google-places';
import { Mapa } from '../../providers/google-places';
import { GoogleMapsEvent, GoogleMap, LatLng } from '@ionic-native/google-maps';
import { MapService } from '../../providers/map-service';

declare var google;
/*

GoogleMap, GoogleMapsEvent, GoogleMapsLatLng
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  placeid: string;
  direccion: string;
  latitud: string;
  longitud: string;


  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

  }


  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public client: GooglePlaces) {
    this.placeid = this.navParams.get("placeid");
    client.get(this.placeid).subscribe(mapa => this.loadMapa(mapa, null));
  }

  loadMapa(mapa: Mapa, err: string) {
    if (err) {
      console.log(err);
      return;
    }

    this.direccion = mapa.direccion;
    this.latitud = mapa.latitud;
    this.longitud = mapa.longitud;
  }


}
