import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import {Storage} from '@ionic/storage';
import {ReservationService} from '../providers/reservation-service';
import {Reservacion} from '../models/reservation';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
/*val=[];*/
rootPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,storage:Storage, public push: Push, public service:ReservationService) {

    storage.ready().then(()=>{

storage.get("reservas").then((val:Reservacion[])=>{

storage.set("reservas",val);

 
});
    
   


      storage.get("logged").then((val)=>{
          if (val){
            this.rootPage = HomePage;
          }else{
            this.rootPage = LoginPage;
          }
      });

    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    
      




    });
  }




}
