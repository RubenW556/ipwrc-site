import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  noNav = ['/login', '/item', '/orders'];

  constructor(public _router: Router) {}

  ngOnInit(): void {
    console.log("yes")
  }

  consolelog(){
    console.log("yes")
  }

}
