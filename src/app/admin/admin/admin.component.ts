import { Component, OnInit } from '@angular/core';
import {AdminService} from "./admin.service";
import {order} from "../../models/order";
import {ShopService} from "../../shop/shop.service";
import {item} from "../../models/item";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {

  public itemName: String= "";
  public price: number= 0;
  public file: string;
  public itemsLooking: boolean = false;
  public items: item[];

  public orders: order[];

  constructor(private adminService:AdminService, private shopService: ShopService) { }

  ngOnInit(): void {
    this.adminService.getOrders().subscribe((data) => {
      this.orders= data;
    })

  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.code;
    const isNumber = !(charCode > 31 && (charCode < 48 || charCode > 57));
    return isNumber;
  }


  sanitizeInput(event: any): boolean {
    const charCode = (event.which) ? event.which : event.code;
    const result = String.fromCharCode(charCode).match(/[a-zA-Z0-9@._ ]+$/);
    return result !== null && result.length > 0;
  }

  changeImg(e: any){
    console.log(e);
    var read = new FileReader();
    read.onload = (e) => {
      this.file =  read.result as string;
    }
    read.readAsDataURL(e.target.files[0])
  }

  upload(){
    this.adminService.upload(this.itemName, this.price, this.file)
  }

  onChange(status:string, id:number){
    this.adminService.changeOrder(id, status);
  }

  showProducts(order:order){
    this.putItems(order.items)
    this.itemsLooking = true;
  }

  closePopout(){
    this.itemsLooking = false;
    console.log(this.itemsLooking);
  }

  putItems(data: number[]){
    let temp: item [] = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      this.shopService.getItem(data[i]).subscribe((data) => {
        temp[i] = data;
        this.items = temp;
      });
    }
  }

}
