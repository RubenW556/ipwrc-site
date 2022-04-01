import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {winkelwagenRoutingModule} from "./winkelwagen.routing";
import {WinkelwagenComponent} from "./winkelwagen/winkelwagen.component";
import {done} from "./orderIsDone/done.component";



@NgModule({
  declarations: [
    WinkelwagenComponent,
    done
  ],
  imports: [
    CommonModule,
    winkelwagenRoutingModule
  ]
})
export class WinkelwagenModule { }
