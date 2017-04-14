import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/user';
import {URL} from '../app/app.config';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {



signin(user:User){

let contentType= new Headers({"Content-Type":"application/json"});
let options = new RequestOptions(contentType);

return this.http.post(URL + "/users/signin", user, options).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });

}



validar(email:string):Observable<{success:boolean , user:any}>{
  let contentType = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions(contentType);

    const body = { email:email };
    return this.http.post(URL + "/users/login", body, options).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  

}



login(username: string, password: string): Observable<{ success: boolean, user: any }> {
    let contentType = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions(contentType);

    const body = { username: username, password: password };
    return this.http.post(URL + "/users/login", body, options).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }



  constructor(public http: Http) {
    console.log('Hello LoginService Provider');
  }

}
