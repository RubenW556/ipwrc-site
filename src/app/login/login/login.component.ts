import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: String = "";
  public password: String = "";
  constructor(private loginService: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }
  logIn(){
    this.loginService.login(this.username, this.password)
    setTimeout(() =>
        (this.reroute())
      , 1000)

  }

  reroute(){
    if(localStorage.getItem("id_token") != null){
      let token = localStorage.getItem('id_token');

      let decodedJWT = JSON.parse(window.atob(token!.split('.')[1]));

      if(decodedJWT.roles=="ROLE_CUSTOMER"){
        this._router.navigateByUrl('shop');
      }
      if(decodedJWT.roles=="ROLE_OWNER"){
        this._router.navigateByUrl('item');
      }


    }
  }

  toRegister(){
      this._router.navigateByUrl('register');
  }

}
