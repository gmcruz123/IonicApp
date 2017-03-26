import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ReservationService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ReservationService {

reservaciones:Reservacion[];  

  constructor(public http: Http) {
    this.Servicio();
    console.log('Hello ReservationService Provider');
  }


Servicio(){

this.reservaciones=[{lugar:"Carantanta",ocasion:"Cumpleaños",fecha:new Date(),hora:new Date(),personas:3}];


}

}


export class Reservacion{
lugar:string;  
ocasion:string;
fecha:Date;
hora:Date;
personas:number;
  }


