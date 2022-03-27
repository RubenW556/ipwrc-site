import { Component, OnInit } from '@angular/core';
import {AdminService} from "./admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {

  public itemName: String= "";
  public price: number= 0;
  public file: string;


  constructor(private itemService:AdminService) { }

  ngOnInit(): void {
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
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
    this.itemService.upload(this.itemName, this.price, this.file)
  }


}
