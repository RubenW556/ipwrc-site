import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class WinkelWagenService {

  constructor(private cookieService : CookieService,
              private http: HttpClient) {
  }

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getShoppingCart(): Observable<number[]> {
    return this.http.get<number[]>(environment.serverURL + "/ShoppingCart"
    );
  }

  addItem(int: number) {
    this.http.post(environment.serverURL + "/ShoppingCart", int, this.httpOptions).subscribe();
  }

  async overrideCart(){
    let items: number[] = this.cookieService.get("shoppingcart").split(",").map(function (item) {
      return parseInt(item, 10);
    });
    //removes faulty element from cookie
    items.splice(-1, 1)

    this.http.post(environment.serverURL + "/ShoppingCart/override", items, {responseType: 'text'})
      .subscribe()
  }


  clearShoppingCart() {
    return this.http.delete(environment.serverURL + "/ShoppingCart", this.httpOptions).subscribe();
  }

  order() {
    return this.http.post(environment.serverURL + "/order", this.httpOptions).subscribe();
  }

}
