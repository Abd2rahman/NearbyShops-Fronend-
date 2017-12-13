import { Component, OnInit } from '@angular/core';
import { Shop } from "../shop";
import { ShopService } from "../shop.service";

@Component ({
   selector: 'preferredShops',
  templateUrl: './preferred-shops.component.html',
  styleUrls: ['./preferred-shops.component.css']
})
export class PreferredShopsComponent implements OnInit {
  preferredShops : Shop[];

  constructor(private shopService: ShopService){}

  ngOnInit(){
     this.shopService.getShops().subscribe(res=>{
      this.preferredShops=res;
    }
    ); 
  }

  
}