

import { Injectable } from "@angular/core";
import { Http, RequestOptions,Headers } from "@angular/http";
import 'rxjs/Rx';

import { Observable } from "rxjs";
import { Shop } from "./shop";
import { retry } from "rxjs/operators/retry";



@Injectable()
export class ShopService {

    constructor(private http:Http){}

    getShops() : Observable<Shop[]>{
        return this.http.get('api/shops').map(res =>{
            return res.json();
        });
    }

    getShopsByDistance() : Observable<Shop[]>{
        return this.http.get('api/shopsByDistance').map(res =>{
            return res.json();
        });
    }

    create(shop: Shop) : Observable<Shop>{

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('api/dislikedShop',shop,options).map(res => {
            return res.json();
        });
    }

    addLikedShop(shop: Shop) : Observable<Shop>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('api/likedShop',shop,options).map(res => {
            return res.json();
        });
    }

    getPreferredShops() : Observable<Shop[]>{
        return this.http.get('api/likedShop').map(res =>{
            return res.json();
        });
    }

    deletelikedShop(id:string): Observable<any>{
        const url = `api/likedShop/${id}`;
        return this.http.delete(url);
    }
    
}