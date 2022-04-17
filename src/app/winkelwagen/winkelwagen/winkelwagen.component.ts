import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item";
import {ShopService} from "../../shop/shop.service";
import {WinkelWagenService} from "../winkel-wagen.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-winkelwagen',
  templateUrl: './winkelwagen.component.html',
  styleUrls: ['./winkelwagen.component.scss']
})
export class WinkelwagenComponent implements OnInit {

  public items: Item[];
  public totalPrice: number = 0;
  public isCustomer: boolean;
  public empty: boolean = false;


  constructor(private shopService: ShopService, private winkelWagenService: WinkelWagenService, private _router: Router, private cookieService: CookieService) {
    this.isCustomer = localStorage.getItem("role") == "ROLE_CUSTOMER";
    let data: number[] = [];
    if (this.isCustomer) {
      if(this.cookieService.get("shoppingcart")!=""){
        this.winkelWagenService.overrideCart()
        this.loadFromCookie()
        this.cookieService.delete("shoppingcart")
      }
      else {
        winkelWagenService.getShoppingCart().subscribe((received) => {
          if (received.length == 0) {
            this.empty = true;
          }
          this.loadItems(received)
        });
      }
    }
    else{
      this.loadFromCookie()
    }
  }

  ngOnInit():
    void {
  }

  clearShoppingCart() {
    if(this.isCustomer) {
      this.winkelWagenService.clearShoppingCart()
    }
    else{
      this.cookieService.delete("shoppingcart");
    }
    this.empty = true;
  }

  order() {
    this.winkelWagenService.order()
    this._router.navigateByUrl("done")
  }

  toLogIn(){
    this.cookieService.set("shop-log", "0")
    this._router.navigateByUrl("login")
  }

  loadItems(data: number[]) {
    let temp: Item [] = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      this.shopService.getItem(data[i]).subscribe((data) => {
        temp[i] = data;
        this.items = temp;
        this.totalPrice = this.totalPrice + temp[i].price;
      });
    }
  }

  loadFromCookie(){
  if (this.cookieService.get("shoppingcart") == "") {
  this.empty = true;
} else {
  let data: number[] = this.cookieService.get("shoppingcart").split(",").map(function (item) {
    return parseInt(item, 10);
  });
  //removes faulty element from cookie
  data.splice(-1, 1)

  this.loadItems(data)
}
}
}
