import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ReservationService } from '../../providers/reservation-service';
import { Reservacion } from '../../models/reservation';
import { ReservationsPage } from '../../pages/reservations/reservations';
import { MenuPage } from '../../pages/menu/menu';
import { WorkingHoursPage } from '../../pages/working-hours/working-hours';
import { GooglePlaces } from '../../providers/google-places';
import { Mapa } from '../../providers/google-places';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-page',
  templateUrl: 'detail-page.html'
})
export class DetailPagePage {
  nombre: string;
  imagen: string;
  likes: number;
  placeid: string;
  tipo: number;
  reservacion: Reservacion;
  data=[];
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public service: ReservationService
    , public client: GooglePlaces
    , public reserva: ReservationService
    , public toastCtrl: ToastController
    , public loadingCtrl: LoadingController
    , public storage: Storage

  ) {

    this.reservacion = new Reservacion();
  /*  this.placeid=this.navParams.get("placeid");
  *//*  client.get(this.placeid).subscribe(mapa=>this.loadMapa(mapa,null));
  */}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPagePage');
    this.nombre = this.navParams.get("nombre");
    this.imagen = this.navParams.get("imagen");
    this.likes = this.navParams.get("likes");
    this.tipo = this.navParams.get("tipo");
    this.reservacion.lugar = this.nombre;
    this.reservacion.tipo = this.tipo;
    this.reservacion.imagen = this.imagen;

}

  loadMapa(mapa: Mapa, err: string) {
    if (err) {
      console.log(err);
      return;
    }


  }


  reservar() {

    let loading = this.loadingCtrl.create({ content: "Cargando ..." });
    loading.present();
    
  
    this.storage.get("userID").then((val)=>{
       
      this.reservacion.idUsu= val;
     console.log("userID : "+this.reservacion.idUsu);

      this.reserva.addReserva(this.reservacion).subscribe(res => {

      loading.dismiss();
      console.log(JSON.stringify(res));
      if (res.success) {
      } else {
        this.toastCtrl.create({ message: "Reserva no ingresada", duration: 3000 }).present();
      }

    }, err => {
      console.log(JSON.stringify(err));
    });






  });


  }




  menu() {
    this.navCtrl.push(MenuPage);
  }

}
