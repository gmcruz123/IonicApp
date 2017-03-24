import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Discoteca,ServiceCards} from '../../providers/service-cards';

/*
  Generated class for the BarCards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bar-cards',
  templateUrl: 'bar-cards.html'
})
export class BarCardsPage {
  discotecas : Discoteca[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service:ServiceCards) {
  this.discotecas=[];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarCardsPage');
   this.discotecas = this.service.disco;
  }

}
