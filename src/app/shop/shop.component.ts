import { Component, OnInit } from '@angular/core';
import {ShopService} from "./shop.service";
import {item} from "../models/item";
import {WinkelWagenService} from "../winkelwagen/winkel-wagen.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})


export class ShopComponent implements OnInit {
  public items: item[];
  public isCustomer: boolean;

  constructor(private shopService: ShopService, private winkelwagenService: WinkelWagenService, private _router: Router, private cookieService: CookieService) {
    this.shopService.getItems().subscribe(items =>{
      this.items = items;
    })
    this.isCustomer = (localStorage.getItem("role")=="ROLE_CUSTOMER");
  }

  ngOnInit(): void {
  }

  addToCart(int: number){
    if(this.isCustomer) {
      this.winkelwagenService.addItem(int);
    }
    else{
      let shoppingCart  = this.cookieService.get('shoppingcart');
      shoppingCart = shoppingCart+int+","
      this.cookieService.set('shoppingcart', shoppingCart)
    }
  }


}
