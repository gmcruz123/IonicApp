import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { User } from '../../models/user';
import {LoginService} from '../../providers/login-service';
import { HomePage} from '../../pages/home/home';



/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  user:User;

  constructor(public navCtrl: NavController
  ,public navParams: NavParams
  ,public singin : LoginService
  ,public toastCtrl: ToastController
  ,public loadingCtrl: LoadingController) {this.user = new User();}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }











 singup() {

    let loading =  this.loadingCtrl.create({content:"Cargando ..."});      
    loading.present();

    this.singin.signin(this.user).subscribe(res => {
      loading.dismiss();
      console.log(JSON.stringify(res));
      if (res.success) {
        this.navCtrl.push(HomePage);
      } else {
        this.toastCtrl.create({message:"Usuario no registrado", duration:3000}).present();
      }

    }, err =>{
      console.log(JSON.stringify(err));
    });
  }


}
