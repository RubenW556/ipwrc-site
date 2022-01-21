import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {winkelwagenRoutingModule} from "./winkelwagen.routing";
import {WinkelwagenComponent} from "./winkelwagen/winkelwagen.component";



@NgModule({
  declarations: [
    WinkelwagenComponent
  ],
  imports: [
    CommonModule,
    winkelwagenRoutingModule
  ]
})
export class WinkelwagenModule { }
