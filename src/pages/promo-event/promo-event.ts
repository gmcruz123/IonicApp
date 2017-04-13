import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LocalNotifications} from '@ionic-native/local-notifications';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotification:LocalNotifications) {
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromoEventPage');
  
  }

}
