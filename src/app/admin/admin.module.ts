import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {adminRoutingModule} from "./admin-Routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "../login/auth.interceptor";
import { FormsModule } from '@angular/forms';
import {AdminComponent} from "./admin/admin.component";



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    adminRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class AdminModule { }
