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
  _shop:any;
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
    this.refreshData();
  }

  like(shop : Shop): void{
    this.nearbyShops = this.nearbyShops.filter(h => h !== shop);
  }

  dislike(shop : Shop): void{
    this.nearbyShops = this.nearbyShops.filter(h => h !== shop);
    this.shopService.create(shop).subscribe(res=>{
      this._shop=res;
    });
  }

  refreshData(): void{
    this.timer=Observable.timer(50000).first().subscribe(() => this.getShops());
  }
  
}