import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Item} from "../../models/item";
import {order} from "../../models/order";


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) {}

  upload (item: Item) {
    return this.http.post(environment.serverURL + "/item", item, this.httpOptions)
  }


  getOrders(): Observable<order[]> {
    return this.http.get<order[]>(environment.serverURL + "/order", this.httpOptions
    );
  }

  changeOrder(id: number, status:string ){
    return this.http.post(environment.serverURL + "/order/"+id+"?orderStatus="+status, null, this.httpOptions
    ).subscribe();
  }

}
