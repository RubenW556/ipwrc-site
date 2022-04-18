import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Item} from "../models/item";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {return this.http.get<Item[]>(environment.serverURL+"/item");}

  getItem(int: number): Observable<Item> {return this.http.get<Item>(environment.serverURL+"/item/"+int);}

  deleteItem(int: number): void {this.http.delete<Item>(environment.serverURL+"/item/"+int).subscribe();}
}
