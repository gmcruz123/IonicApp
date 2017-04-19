import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 

/*
  Generated class for the GooglePlaces provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GooglePlaces {


  constructor(public http: Http) {
    
    console.log('Hello GooglePlaces Provider');
  }

 get(placeid:string): Observable<Mapa> {
    return this.http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid="+placeid+"&key=AIzaSyD2lEljSFS9_iUzu2F8ULWes7vQv1BgDr0")
      .map(this.proccessResponse);
  }



private proccessResponse(response:Response){

let body = response.json();
    /*chanel para la direccion 
    chanel1 para latitud y longitud*/
    let channel =  body.result.geometry;
    let channel1 = body.result.formatted_address;

    let direccion = channel1;
    let lat = channel.location.lat;
    let long = channel.location.lng;
    let horario = body.result.opening_hours.open_now;
    let dia = body.result.opening_hours.periods;


    console.log("Direccion:"+direccion+"     latitud:"+lat +"    longitud"+long+"  Abierto:"+horario +"dias:"+JSON.stringify(dia) );
let mapa  = new Mapa(lat,long,direccion);
return mapa;}


private processError(){
 Observable.throw("Error al consumir el servicio");
}


}


export class Mapa {
constructor(public latitud:string,
public longitud: string,
public direccion: string){}
}