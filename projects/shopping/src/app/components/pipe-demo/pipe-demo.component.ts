import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css'
})
export class PipeDemoComponent {
  public Product:{Name:string, Price:number, Mfd:Date, Rate:number}={
    Name: 'Samsung Tv',
    Price: 34000.30,
    Mfd: new Date("2023-01-22"),
    Rate : 0.0245
  }
}
