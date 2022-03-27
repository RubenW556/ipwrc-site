import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  async order(number: Number[]) {
    this.http.post(environment.serverURL + "/order", number, {responseType: 'text'})
      .subscribe()
  }
}
