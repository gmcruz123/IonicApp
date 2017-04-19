import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServiceCards} from '../../providers/service-cards';
import {Eventos} from '../../models/eventos';
import {EvenpromoDetailPage} from '../../pages/evenpromo-detail/evenpromo-detail';

/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  eventos:Eventos[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceCards) {
    this.eventos=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }
     ionViewDidEnter() {
    this.service.allEvents().subscribe(data => this.eventos = data);

   }

ver(index:number){
 this.navCtrl.parent.push(EvenpromoDetailPage,{hora:this.eventos[index].hora,fecha:this.eventos[index].fecha,nombre:this.eventos[index].lugar, imagen:this.eventos[index].imagen,info:this.eventos[index].info,cover:this.eventos[index].cover,type:"Evento"});

}




}
