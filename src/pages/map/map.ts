import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { GooglePlaces } from '../../providers/google-places';
import { Mapa } from '../../providers/google-places';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

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
  latitud1:number;
  longitud1:number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage'); 
this.loadMap();
 }


  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public client: GooglePlaces
    , private googleMaps: GoogleMaps) {

      this.loadMap();
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
    this.longitud = mapa.longitud;
  }




/*Empieza google maps pulggin*/


// Load map only after view is initialize
ngAfterViewInit() {
this.loadMap();
}


loadMap() {
 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won't be visible
 // <ion-content>
 //  <div #map id="map" style="height:100%;"></div>
 // </ion-content>

 // create a new map by passing HTMLElement
 let element: HTMLElement = document.getElementById('map');

 let map: GoogleMap = this.googleMaps.create(element);

 // listen to MAP_READY event
 // You must wait for this event to fire before adding something to the map or modifying it in anyway
 map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

 // create LatLng object
 let ionic: LatLng = new LatLng(43.0741904,-89.3809802);

 // create CameraPosition
 let position: CameraPosition = {
   target: ionic,
   zoom: 18,
   tilt: 30
 };

 // move the map's camera to position
 map.moveCamera(position);

 // create new marker
 let markerOptions: MarkerOptions = {
   position: ionic,
   title: 'Ionic'
 };

 /*const marker:Marker = map.addMarker(markerOptions)
   .then((marker: Marker) => {
      marker.showInfoWindow();
    });*/


 }





}
