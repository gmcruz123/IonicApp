import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import {GooglePlaces} from '../../providers/google-places';
import {Mapa} from '../../providers/google-places';
import { GoogleMapsEvent,GoogleMap,LatLng } from '@ionic-native/google-maps';
import {MapService} from '../../providers/map-service';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

  }



}
