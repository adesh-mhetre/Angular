import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonHomeComponent } from './component/amazon-home/amazon-home.component';
import { AmazonElectronicsComponent } from './component/amazon-electronics/amazon-electronics.component';
import { AmazonJewelaryComponent } from './component/amazon-jewelary/amazon-jewelary.component';
import { AmazonMensComponent } from './component/amazon-mens/amazon-mens.component';
import { AmazonWomensComponent } from './component/amazon-womens/amazon-womens.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AmazonDetailsComponent } from './component/amazon-details/amazon-details.component';
import { MobileDetailsComponent } from '../../../shopping/src/app/components/mobile-details/mobile-details.component';
import { AmazonMoreDetailsComponent } from './component/amazon-more-details/amazon-more-details.component';
import { AmazonAdminComponent } from './component/amazon-admin/amazon-admin.component';
import { amazonAdminGuard } from './gaurd/amazon-admin.guard';
import { AmazonLoginComponent } from './component/amazon-login/amazon-login.component';

const routes: Routes = [
  {path:"home",component:AmazonHomeComponent},
  {path:"electronics",component:AmazonElectronicsComponent},
  {path:"jewelary",component:AmazonJewelaryComponent},
  {path:"mens",component:AmazonMensComponent},
  {path:"womens",component:AmazonWomensComponent},
  {path:"details/:id",component:AmazonDetailsComponent,
    children:[
      {path:"more/:id",component:AmazonMoreDetailsComponent}
    ]
  },
  {
    path:"admin",component:AmazonAdminComponent, canActivate:[amazonAdminGuard]
  },
  {path:"login",component:AmazonLoginComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
