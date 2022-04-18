import { Component, OnInit } from '@angular/core';
import {AdminService} from "./admin.service";
import {order} from "../../models/order";
import {ShopService} from "../../shop/shop.service";
import {Item} from "../../models/item";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {


  public item: Item = {} as Item;
  public itemsLooking: boolean = false;
  public orderItems: Item[];
  public items: Item[];

  public edit: boolean = false;
  public editItem: Item;

  public orders: order[];

  constructor(private adminService:AdminService, private shopService: ShopService) { }

  ngOnInit(): void {
    this.adminService.getOrders().subscribe((data) => {
      this.orders= data;
    })
    this.shopService.getItems().subscribe((data) => {
      this.items= data;
    })

  }

  editThisItem(item:  Item){
    this.editItem = item;
    this.edit = true;
  }

  uploadEdit(){
    this.adminService.upload(this.editItem)
    this.edit = false;
  }
  exitEdit(){
    this.edit = false;
  }

  updateItems(){
    this.shopService.getItems().subscribe((data) => {
      this.items= data;
    })
  }

  deleteItem(id:number){
    this.shopService.deleteItem(id);
    this.edit = false;
    this.items.splice(this.items.indexOf(this.editItem), 1)
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
    var read = new FileReader();
    read.onload = (e) => {
      this.item.image =  read.result as string;
    }
    read.readAsDataURL(e.target.files[0])
  }

  changeEditImg(e: any){
    var read = new FileReader();
    read.onload = (e) => {
      this.editItem.image =  read.result as string;
    }
    read.readAsDataURL(e.target.files[0])
  }

  upload(){
    if(this.item.image!=null &&this.item.itemName!=null &&this.item.price!=null) {
      this.adminService.upload(this.item).subscribe((data) =>
        this.shopService.getItems().subscribe((data) => {
          this.items= data;
        })
      )
    }
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
  }

  putItems(data: number[]){
    let temp: Item [] = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      this.shopService.getItem(data[i]).subscribe((data) => {
        temp[i] = data;
        this.orderItems = temp;
      });
    }
  }

}
