import { Component, OnInit } from '@angular/core';
import { Shop } from "../shop";
import { ShopService } from "../shop.service";
import { Observable } from 'rxjs/Observable';

@Component ({
   selector: 'preferredShops',
  templateUrl: './preferred-shops.component.html',
  styleUrls: ['./preferred-shops.component.css']
})
export class PreferredShopsComponent implements OnInit {
  preferredShops : Shop[];
  timer : any;

  constructor(private shopService: ShopService){}

  ngOnInit(){
    this.getPreferredShops();
  }

  getPreferredShops(){
    this.shopService.getPreferredShops().subscribe(res=>{
      this.preferredShops=res;
    }
    ); 
    this.refreshData();
  }

  refreshData(): void{
    this.timer=Observable.timer(5000).first().subscribe(() => this.getPreferredShops());
  }

  remove(shop:Shop){
    this.preferredShops=this.preferredShops.filter(h => h !== shop);
    this.shopService.deletelikedShop(shop.id).subscribe();
  }

  
}