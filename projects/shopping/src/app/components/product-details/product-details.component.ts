import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {


  public ViewName : string = 'View1';

  ViewClick(Viewname: string) {
    this.ViewName = Viewname;
    }
}
