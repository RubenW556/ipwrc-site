import { Component, OnInit } from '@angular/core';
import {ShopService} from "./shop.service";
import {item} from "../models/item";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public items: item[];

  constructor(private shopService: ShopService) {
    this.shopService.getItems().subscribe(items =>{
      this.items = items;
    })
  }

  ngOnInit(): void {
  }

  addToCart(int: number){
    localStorage.getItem("winkelwagen");

  }

}
