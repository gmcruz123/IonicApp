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
  {nombre:"Carantanta",likes:0,imagen:"../assets/img/Restaurantes-bares/Carantanta.jpg",placeid:"ChIJgSF2bnMDMI4Rtd_ptRhXpGE"},
  {nombre:"Boogie Boggie",likes:0,imagen:"../assets/img/Restaurantes-bares/boogie.jpg",placeid:"ChIJPZ6IyXUDMI4R2nvGbNoKn4w"},
  {nombre:"Wokin",likes:0,imagen:"../assets/img/Restaurantes-bares/wokin.jpg",placeid:"ChIJj-B7cHQDMI4R6v_JRdyYpAQ"},
  {nombre:"La cosecha",likes:0,imagen:"../assets/img/Restaurantes-bares/cosecha.jpg",placeid:"ChIJZyLeGRADMI4R6_TYQVNsSFM"},
  {nombre:"La sala",likes:0,imagen:"../assets/img/Restaurantes-bares/salsa.jpg",placeid:"ChIJ-64jcHMDMI4RZjODotGoXzs"},
  {nombre:"Pacco's Pizza",likes:0,imagen:"../assets/img/Restaurantes-bares/pacos.jpg",placeid:"ChIJN2HkgA0DMI4Rud6j0iEASng"},
];

this.disco=[
  {nombre:"Corona",likes:0,imagen:"../assets/img/Discotecas/corona.jpg", placeid:"ChIJ-cUT8g8DMI4RzkNV_f4ket4"},
  {nombre:"Tropical",likes:0,imagen:"../assets/img/Discotecas/tropical.jpg",placeid:"ChIJj_8CFW0EMI4RWTLM-ZWeAiE"},
  {nombre:"Borinquen",likes:0,imagen:"../assets/img/Discotecass/space.jpg",placeid:"ChIJAVYnWRIEMI4RuPGmOWP_n3E"},
  {nombre:"Sandunga",likes:0,imagen:"../assets/img/Discotecas/Sandunga.jpg",placeid:"ChIJ9zL-7RIEMI4RUjCS4OakvBo"},
  {nombre:"Retro Grill",likes:0,imagen:"../assets/img/Discotecas/vinilo.jpg",placeid:"ChIJkTNIenQDMI4R8AY3s33bUps"},
  {nombre:"Babilonia",likes:0,imagen:"../assets/img/Discotecas/Borinquen.jpg",placeid:"ChIJqykDNJwDMI4RBY1mytlznY0"},

];




  }

}


export class Restaurante {
  nombre: string;
  likes: number;
  imagen: string;
  placeid?:string;
}

export class Discoteca {

  nombre: string;
  likes: number;
  imagen: string;
  placeid?: string;

}