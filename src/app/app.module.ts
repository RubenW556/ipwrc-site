import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {HomeModule} from "./home/home.module";
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { ItemComponent } from './admin/item/item.component';
import {AdminModule} from "./admin/admin.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ShopModule} from "./shop/shop.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminloginComponent,
    ItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
