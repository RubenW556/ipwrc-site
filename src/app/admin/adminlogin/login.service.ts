import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  async login (username: String, password: String) {
    let data: String = "{\"username\":\""+username+"\",\"password\":\""+password+"\"}"
    this.logout();
    this.http.post(environment.serverURL + "/login", data, {responseType: 'text'})
      .subscribe(data =>  this.setSession(data))
  }

  logout() {
    localStorage.removeItem("id_token")
  }
  setSession (authResult: any) {
    localStorage.setItem("id_token", authResult)
    this.http.get(environment.serverURL + "/hello").subscribe(data => console.log(data))
}
}
