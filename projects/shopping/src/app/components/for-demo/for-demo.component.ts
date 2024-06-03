import { Component } from '@angular/core';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrl: './for-demo.component.css'
})
export class ForDemoComponent {
  // public Categories:string[] = ["All","Electronics","Footwear","Fashion"]

  public Menu: { Category: string, Product: String[] }[] = [
    {
      Category: "Electronis",
      Product: ["Television", "Mobile"]
    },
    {
      Category: "Footwear",
      Product: ["Sneakers", "Boots", "Casulas"]
    }
  ]

  public Products:{Name:string, Price:number}[]=[
    {Name:"Samsung TV",Price: 45000.00},
    {Name:"Mobile",Price: 20000.00},
    {Name:"Nike Casuals",Price: 5300.00},


]
}