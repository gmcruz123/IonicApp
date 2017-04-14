import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/*
  Generated class for the PromoEvent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-promo-event',
  templateUrl: 'promo-event.html'
})
export class PromoEventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
  
  this.storage.get("logged").then(val=>console.log("logged promo:"+val));
  this.storage.get("userdata").then(val=>console.log("userdatapromo"+val));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromoEventPage');
  
  }

}
