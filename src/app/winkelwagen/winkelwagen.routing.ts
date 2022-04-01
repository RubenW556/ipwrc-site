import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WinkelwagenComponent} from "./winkelwagen/winkelwagen.component";
import {done} from "./orderIsDone/done.component";

const routes: Routes = [
  {path: "shoppingcart", component: WinkelwagenComponent},
  {path: "done", component: done},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class winkelwagenRoutingModule { }
