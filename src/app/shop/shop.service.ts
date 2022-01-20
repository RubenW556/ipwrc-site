import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {item} from "../models/item";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) {}

  getItems(): Observable<item[]> {return this.http.get<item[]>(environment.serverURL+"/item");}
}
