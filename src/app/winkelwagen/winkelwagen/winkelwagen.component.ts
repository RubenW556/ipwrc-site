import { Component, OnInit } from '@angular/core';
import {item} from "../../models/item";
import {ShopService} from "../../shop/shop.service";

@Component({
  selector: 'app-winkelwagen',
  templateUrl: './winkelwagen.component.html',
  styleUrls: ['./winkelwagen.component.scss']
})
export class WinkelwagenComponent implements OnInit {

  public items: item[];
  public ids: number[];
  public loggedIn: boolean = true;
  public totalPrice: number= 0;


  constructor(private shopService: ShopService) {
    let string = localStorage.getItem("winkelwagen") as string;
    if(string!=null) {
      this.ids = string.split(',').map(function (item) {
        return parseInt(item);
      });
      let temp: item [] = new Array(this.ids.length)
      for (let i = 0; i < this.ids.length; i++) {
        this.shopService.getItem(this.ids[i]).subscribe((data) => {
          temp[i] = data;
          console.log(data);
          this.items = temp;
          this.totalPrice = this.totalPrice + temp[i].price;
        });
      }
    }
    if(localStorage.getItem("id_token")!=null){
      this.loggedIn = true;
    }

  }


  ngOnInit(): void {
  }

  clearShoppingCart(){
    localStorage.removeItem("winkelwagen")
  }

  order(){

  }

}
