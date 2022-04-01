import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: String = "";
  public password: String = "";
  constructor(private loginService: LoginService, private _router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  logIn(){
    localStorage.removeItem("id_token");
    this.loginService.login(this.username, this.password)
    setTimeout(() =>
        (this.reroute())
      , 1000)
  }

  reroute(){
    if(localStorage.getItem("id_token") != null){
      let token = localStorage.getItem('id_token');

      let decodedJWT = JSON.parse(window.atob(token!.split('.')[1]));
      localStorage.setItem("role", decodedJWT.roles)
      console.log(parseInt(this.cookieService.get("shop-log"))==0)
      if(parseInt(this.cookieService.get("shop-log"))==0){
        this.cookieService.set("shop-log", "1");
        this._router.navigateByUrl('shoppingcart');
      }

      else if(decodedJWT.roles=="ROLE_CUSTOMER"){
        this._router.navigateByUrl('shop');
      }
      else if(decodedJWT.roles=="ROLE_OWNER"){
        this._router.navigateByUrl('admin');
      }
    }
  }

  toRegister(){
      this._router.navigateByUrl('register');
  }

}
