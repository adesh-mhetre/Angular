import { Component, OnInit } from '@angular/core';
import { FakeStoreProductContract } from '../../contracts/FakeStore';

@Component({
  selector: 'app-products-data',
  templateUrl: './products-data.component.html',
  styleUrl: './products-data.component.css'
})
export class ProductsDataComponent implements OnInit{
  public Products:FakeStoreProductContract[] = [];
  public AllCount:number = 0;
  public ElectronicCount:number = 0;
  public JewelleryCount:number = 0;
  public MensCount:number = 0;
  public WomensCount:number = 0;

  ngOnInit(): void {
    fetch('http://fakestoreapi.com/products')
    .then(responce=>responce.json())
    .then(data=>{
      this.Products=data;
      this.AllCount=data.length;
      this.ElectronicCount = data.filter((product:any) => product.category=='electronics').length;
      this.JewelleryCount = data.filter((product:any) => product.category=='jewelery').length;
      this.MensCount = data.filter((product:any) => product.category=="men's clothing").length;
      this.WomensCount = data.filter((product:any) => product.category=="women's clothing").length;

    });
  }

}
