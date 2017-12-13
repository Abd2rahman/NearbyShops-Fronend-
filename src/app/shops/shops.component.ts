import { Component, OnInit } from '@angular/core';
import { Shop } from "../shop";
import { ShopService } from "../shop.service";
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';

@Component ({
   selector: 'shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  timer : any;
  nearbyShops : Shop[];

  constructor(private shopService: ShopService){}

  ngOnInit(){
     this.getShops();
  }

  getShops(): void{
    this.shopService.getShopsByDistance().subscribe(res=>{
      this.nearbyShops=res;
    }
    );
  }

  like(shop : Shop): void{
    this.nearbyShops = this.nearbyShops.filter(h => h !== shop);
  }

  
}