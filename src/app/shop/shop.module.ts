import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import {shopRoutingModule} from "./shop.routing";



@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    shopRoutingModule
  ]
})
export class ShopModule { }
