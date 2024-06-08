import { Component, OnInit } from '@angular/core';
import { FakeStoreProductContract } from '../../contracts/FakeStore';


@Component({
  selector: 'app-material-demo',
  templateUrl: './material-demo.component.html',
  styleUrl: './material-demo.component.css',
})
export class MaterialDemoComponent implements OnInit{

  // component development kit
  public Products:FakeStoreProductContract[]=[];

  ngOnInit(){
      fetch('http://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data=>{
        this.Products=data;
      })
  }
}
