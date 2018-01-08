import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { ShopsComponent } from "./shops/shops.component";
import { ShopService } from "./shop.service";
import { HttpModule } from "@angular/http";
import { PreferredShopsComponent } from './preferredShops/preferred-shops.component';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';
import { AuthComponent } from './login/auth.component';

const routes: Routes = [
  { path: 'auth',component: AuthComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ShopsComponent,canActivate: [AuthGuard]},
  { path: 'preferredShops', component: PreferredShopsComponent,canActivate: [AuthGuard] },
  
];

@NgModule({
  declarations: [
    AppComponent,
    ShopsComponent,
    AuthComponent,
    PreferredShopsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)    
  ],
  providers: [ShopService,AuthGuard,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
