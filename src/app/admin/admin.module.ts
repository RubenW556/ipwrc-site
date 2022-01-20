import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {adminRoutingModule} from "./admin-Routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./adminlogin/auth.interceptor";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    adminRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class AdminModule { }
