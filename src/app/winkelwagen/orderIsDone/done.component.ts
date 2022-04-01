import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-winkelwagen',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class done implements OnInit {


      ngOnInit():
      void {}

  constructor(private _router: Router) {
  }

  public backToShop(){
        this._router.navigateByUrl("home")
  }

}
