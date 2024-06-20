import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmazonIndexComponent } from './component/amazon-index/amazon-index.component';
import { AmazonHomeComponent } from './component/amazon-home/amazon-home.component';
import { AmazonElectronicsComponent } from './component/amazon-electronics/amazon-electronics.component';
import { AmazonJewelaryComponent } from './component/amazon-jewelary/amazon-jewelary.component';
import { AmazonMensComponent } from './component/amazon-mens/amazon-mens.component';
import { AmazonWomensComponent } from './component/amazon-womens/amazon-womens.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { FakestoreService } from '../../../amazon/src/app/service/fakestore.service';
import { HttpClientModule } from '@angular/common/http';
import { AmazonDetailsComponent } from './component/amazon-details/amazon-details.component';
import { AmazonMoreDetailsComponent } from './component/amazon-more-details/amazon-more-details.component';
import { AmazonAdminComponent } from './component/amazon-admin/amazon-admin.component';
import { AmazonLoginComponent } from './component/amazon-login/amazon-login.component';
import { AmazonCartComponent } from './component/amazon-cart/amazon-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AmazonIndexComponent,
    AmazonHomeComponent,
    AmazonElectronicsComponent,
    AmazonJewelaryComponent,
    AmazonMensComponent,
    AmazonWomensComponent,
    NotfoundComponent,
    AmazonDetailsComponent,
    AmazonMoreDetailsComponent,
    AmazonAdminComponent,
    AmazonLoginComponent,
    AmazonCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FakestoreService],
  bootstrap: [AmazonIndexComponent]
})
export class AppModule { }
