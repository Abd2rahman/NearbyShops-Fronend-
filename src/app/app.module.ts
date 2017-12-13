import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShopsComponent } from "./shops/shops.component";
import { ShopService } from "./shop.service";
import { HttpModule } from "@angular/http";
import { PreferredShopsComponent } from './preferredShops/preferred-shops.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ShopsComponent },
  { path: 'preferredShops', component: PreferredShopsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShopsComponent,
    PreferredShopsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)    
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
