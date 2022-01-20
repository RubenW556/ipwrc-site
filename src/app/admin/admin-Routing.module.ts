import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminloginComponent} from "./adminlogin/adminlogin.component";
import {ItemComponent} from "./item/item.component";

const routes: Routes = [
  {path: "login", component: AdminloginComponent},
  {path: 'admin',   redirectTo: '/login', pathMatch: 'full' },
  {path: "item", component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class adminRoutingModule { }
