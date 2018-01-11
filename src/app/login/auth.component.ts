import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent{
    
    signin:boolean=true;

    model: any = {};
    error = '';

    registerModel:any={};
    registerError='';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }
 
    ngOnInit() {
        this.authenticationService.logout();
    }
 
    login() {
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['home']);
                } else {
                    this.error = 'Username or password is incorrect';
                }
            }, error => {
              this.error = 'Username or password is incorrect';
            });
    }

    register(){
        this.authenticationService.register(this.registerModel.rUsername, this.registerModel.rPassword).subscribe(
            res =>{
                if(res === true){
                    this.signIn(true);
                }else{
                    this.registerError="Username used, try another one"
                }
            },error =>{
                this.registerError=error;
            }
        );
    }

    signIn(b:boolean){
        this.signin=b;
        this.model={};
        this.error='',
        this.registerModel={};
        this.registerError='';
    }
}