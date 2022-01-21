import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WinkelwagenComponent} from "./winkelwagen/winkelwagen.component";

const routes: Routes = [
  {path: "shoppingcart", component: WinkelwagenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class winkelwagenRoutingModule { }
