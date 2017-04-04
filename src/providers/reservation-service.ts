import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Reservacion} from '../models/reservation';
import { Observable } from 'rxjs/Observable';
import { URL} from '../app/app.config';
import 'rxjs/add/operator/map';
/*
  Generated class for the ReservationService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()

export class ReservationService {


addReserva(reservacion:Reservacion){

let contentType= new Headers({"Content-Type":"application/json"});
let options = new RequestOptions(contentType);

return this.http.post(URL + "/reservaciones", reservacion, options).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });

}



allReserva(): Observable<Reservacion[]> {
    return this.http.get(URL + "/reservaciones").map(response => {
      return response.json();
    }).catch(err => {
      return Observable.throw(err);
    });
  }
 









  constructor(public http: Http) {
    console.log('Hello ReservationService Provider');
  }



}


