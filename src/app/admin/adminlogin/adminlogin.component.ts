import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  public username: String = "";
  public password: String = "";
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  logIn(){
    this.loginService.login(this.username, this.password)
    if(localStorage.getItem("id_token")){
      this.router.navigateByUrl('item');
    }
  }

}