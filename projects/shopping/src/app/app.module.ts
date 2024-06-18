import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetflixRegister } from './components/netflix-register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NetflixIndexComponent } from './Netflix/netflix-index/netflix-index.component';
import { NetflixHeaderComponent } from './Netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './Netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './Netflix/netflix-register/netflix-register.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { MobileDetailsComponent } from './components/mobile-details/mobile-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ForDemoComponent } from './components/for-demo/for-demo.component';
import { ShoperTemplateComponent } from './components/shoper-template/shoper-template.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { EmiComponent } from './components/emi/emi.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductsDataComponent } from './components/products-data/products-data.component';
import { FilterComponent } from './components/filter/filter.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { SentencePipe } from './pipes/sentence.pipe';
import { CaptchaService } from './service/captcha.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceDemoComponent } from './components/service-demo/service-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixRegister,
    LoginComponent,
    HomeComponent,
    NetflixIndexComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
    DataBindingComponent,
    FakestoreComponent,
    ContentProjectionComponent,
    MobileDetailsComponent,
    ProductDetailsComponent,
    ForDemoComponent,
    ShoperTemplateComponent,
    ClassBindingComponent,
    EventBindingComponent,
    EmiComponent,
    BmiComponent,
    ParentComponent,
    ChildComponent,
    ProductsDataComponent,
    FilterComponent,
    MaterialDemoComponent,
    PipeDemoComponent,
    SentencePipe,
    ServiceDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ScrollingModule,
    HttpClientModule,
    
  ],
  providers: [
    provideAnimationsAsync(),
    
  ],
  bootstrap: [ServiceDemoComponent]
}) 
export class AppModule { }
 