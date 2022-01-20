import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) {}

  upload (name: String, price: number, data: String) {
    let item: String = "{\"itemName\":\""+name+"\",\"price\":\""+price+"\",\"image\":\""+data+"\"}"
    return this.http.post(environment.serverURL + "/item", item, this.httpOptions)
      .subscribe()
  }

}
