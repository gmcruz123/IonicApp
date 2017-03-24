import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceCards provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceCards {

restaurante:Restaurante[];
disco : Discoteca[];

  constructor() {
    this.Servicio();
    console.log('Hello ServiceCards Provider');
  }


  Servicio(){

this.restaurante = [
  {nombre:"Carantanta", direccion:"",likes:0,imagen:"../assets/img/Restaurantes-bares/Carantanta.jpg"},
/*  {nombre:"Pizarra", direccion:"",likes:0,imagen:""},*/
  {nombre:"Boogie Boggie", direccion:"",likes:0,imagen:"../assets/img/Restaurantes-bares/boogie.jpg"},
  {nombre:"Wokin", direccion:"",likes:0,imagen:"../assets/img/Restaurantes-bares/wokin.jpg"},
  {nombre:"La cosecha", direccion:"",likes:0,imagen:"../assets/img/Restaurantes-bares/cosecha.jpg"},
  {nombre:"La sala", direccion:"",likes:0,imagen:"../assets/img/Restaurantes-bares/salsa.jpg"},
  {nombre:"Pacco's Pizza", direccion:"",likes:0,imagen:"../assets/img/Restaurantes-bares/pacos.jpg"},
];

this.disco=[
  {nombre:"Corona", direccion:"",likes:0,imagen:"../assets/img/Discotecas/corona.jpg"},
/*  {nombre:"Pizarra", direccion:"",likes:0,imagen:""},*/
  {nombre:"Tropical", direccion:"",likes:0,imagen:"../assets/img/Discotecas/tropical.jpg"},
  {nombre:"Borinquen", direccion:"",likes:0,imagen:"../assets/img/Discotecass/space.jpg"},
  {nombre:"Sandunga", direccion:"",likes:0,imagen:"../assets/img/Discotecas/Sandunga.jpg"},
  {nombre:"Vinilo Retro", direccion:"",likes:0,imagen:"../assets/img/Discotecas/vinilo.jpg"},
  {nombre:"Space", direccion:"",likes:0,imagen:"../assets/img/Discotecas/Borinquen.jpg"},

];




  }

}


export class Restaurante {
  nombre: string;
  direccion: string;
  likes: number;
  imagen: string;
  horario? : string;
}

export class Discoteca {

nombre: string;
  direccion: string;
  likes: number;
  imagen: string;
  horario? : string;
}