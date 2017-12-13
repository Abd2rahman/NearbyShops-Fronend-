

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';

import { Observable } from "rxjs";
import { Shop } from "./shop";

@Injectable()
export class ShopService {

    constructor(private http:Http){}

    getShops() : Observable<Shop[]>{
        return this.http.get('api/shops').map(res =>{
            return res.json();
        });
    }

    getShopsByDistance() : Observable<Shop[]>{
        return this.http.get('api/shopsSorted').map(res =>{
            return res.json();
        });
    }

}