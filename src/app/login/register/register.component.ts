import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import {account} from "../../models/account";

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public username: string = "";
  public password: string = "";
  public email: string = "";
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    let newAccount: account = new account(this.username, this.password, this.email);

    this.loginService.register(newAccount)
    setTimeout(() =>
        (this.toLogIn())
      , 1000)
  }

  toLogIn(){
    this.router.navigateByUrl('login');
  }
}
