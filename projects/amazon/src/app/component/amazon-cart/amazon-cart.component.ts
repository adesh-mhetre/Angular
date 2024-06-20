import { Component } from '@angular/core';

@Component({
  selector: 'app-amazon-cart',
  templateUrl: './amazon-cart.component.html',
  styleUrl: './amazon-cart.component.css'
})
export class AmazonCartComponent {
  public Title():string{
    return "Amazon Shopping Cart";
  }

  public Total(qty:number,price:number):number{
    return qty*price;
  }
}
