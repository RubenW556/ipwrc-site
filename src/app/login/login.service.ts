import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {account} from "../models/account";
import {CookieService} from "ngx-cookie-service";
import {lastValueFrom} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  async login (username: String, password: String) {
    let data: String = "{\"username\":\""+username+"\",\"password\":\""+password+"\"}";
    this.logout();
    this.http.post(environment.serverURL + "/login", data, {responseType: 'text'})
      .subscribe(data =>  this.setSession(data)
      );

  }

  async register(newAccount: account){
    const data$ = this.http.post(environment.serverURL + "/user", newAccount, {responseType: 'text'});
    await lastValueFrom(data$);
//      .subscribe(data=>{

  }



  logout() {
    localStorage.removeItem("id_token")
  }
  setSession (authResult: any) {
    localStorage.setItem("id_token", authResult)
}
}
