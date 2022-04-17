import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {HomeModule} from "./home/home.module";
import {AdminModule} from "./admin/admin.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ShopModule} from "./shop/shop.module";
import {WinkelwagenModule} from "./winkelwagen/winkelwagen.module";
import {LoginModule} from "./login/login.module";
import {notFoundRoutingModule} from "./not-found/not-found.routing";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    ShopModule,
    WinkelwagenModule,
    LoginModule,
    notFoundRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
