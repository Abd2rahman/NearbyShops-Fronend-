import {Injectable} from '@angular/core'
import { Http, RequestOptions, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService{

    constructor(private http:Http){}

    login(username:string,password:string):Observable<boolean>{

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('login',JSON.stringify({username: username, password: password}),options).map(
            (res:Response)=>{
                let token=res.headers.get('authorization');
                if(token){
                    localStorage.setItem('currentUser',JSON.stringify({ username: username, token: token }));
                    return true;
                }
                return false;
            }
        );
    }

    logout(): void {
        localStorage.removeItem('currentUser');
    }

    isAuthenticated():boolean{
        if(localStorage.getItem('currentUser')){
            return true;
        }
        return false;
    }

    getUser(){
        var currentUser=JSON.parse(localStorage.getItem('currentUser'));
        return currentUser.username;
    }

    getToken(){
        var currentUser=JSON.parse(localStorage.getItem('currentUser'));
        return currentUser.token;
    }
}