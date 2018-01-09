

import { Injectable } from "@angular/core";
import { Http, RequestOptions,Headers } from "@angular/http";
import 'rxjs/Rx';

import { Observable } from "rxjs";
import { Shop } from "./shop";
import { retry } from "rxjs/operators/retry";
import { AuthenticationService } from "./authentication.service";



@Injectable()
export class ShopService { 

    constructor(private http:Http,private authenticationService:AuthenticationService){
        
    }

    getShops() : Observable<Shop[]>{

        let headers = new Headers({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + this.authenticationService.getToken() });
        let options=new RequestOptions({ headers: headers });
        
        return this.http.get('api/shops',options).map(res =>{
            return res.json();
        });
    }

    getShopsByDistance() : Observable<Shop[]>{

        let headers = new Headers({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + this.authenticationService.getToken() });
        let options=new RequestOptions({ headers: headers });
        
        return this.http.get('api/shopsByDistance',options).map(res =>{
            return res.json();
        });
    }

    create(shop: Shop) : Observable<Shop>{

        let headers = new Headers({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + this.authenticationService.getToken() });
        let options=new RequestOptions({ headers: headers });

        return this.http.post('api/dislikedShop',shop,options).map(res => {
            return res.json();
        });
    }

    addLikedShop(shop: Shop) : Observable<Shop>{

        let headers = new Headers({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + this.authenticationService.getToken() });
        let options=new RequestOptions({ headers: headers });

        return this.http.post('api/likedShop',shop,options).map(res => {
            return res.json();
        });
    }

    getPreferredShops() : Observable<Shop[]>{

        let headers = new Headers({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + this.authenticationService.getToken() });
        let options=new RequestOptions({ headers: headers });

        return this.http.get('api/likedShop',options).map(res =>{
            return res.json();
        });
    }

    deletelikedShop(id:string): Observable<any>{

        let headers = new Headers({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + this.authenticationService.getToken() });
        let options=new RequestOptions({ headers: headers });

        const url = `api/likedShop/${id}`;
        return this.http.delete(url,options);
    }
    
}