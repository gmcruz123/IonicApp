import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import {CardsPage} from '../../pages/cards/cards';
import {LoginService} from '../../providers/login-service';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

user:string;
pass:string;

  constructor(public navCtrl: NavController
  ,public navParams: NavParams
  ,public service: LoginService
  ,public toastCtrl: ToastController
  ,public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login() {

    let loading =  this.loadingCtrl.create({content:"Cargando ..."});      
    loading.present();

    this.service.login(this.user, this.pass).subscribe(res => {
      loading.dismiss();
      console.log(JSON.stringify(res));
      if (res.success) {
        this.navCtrl.push(CardsPage);
      } else {
        this.toastCtrl.create({message:"Usuario o password invalid", duration:3000}).present();
      }

    }, err =>{
      console.log(JSON.stringify(err));
    });
  }





}
