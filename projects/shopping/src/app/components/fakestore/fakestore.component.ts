import { Component, OnInit } from '@angular/core';
import { FakeStoreProductContract } from '../../contracts/FakeStore';

@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.component.html',
  styleUrl: './fakestore.component.css'
})
export class FakestoreComponent implements OnInit {
  constructor(){

  }
  public Product: FakeStoreProductContract = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  }
  public LoadProduct(id:number):void{
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(responce => responce.json())
    .then(data=>{
      this.Product = data;
    })
  }
  ngOnInit():void{
    this.LoadProduct(1);
  }
  public Count:number=1;
  public NextClick():void{
    this.Count++;
    this.LoadProduct(this.Count)
  }
  public PreviousClick():void{
    this.Count--;
    this.LoadProduct(this.Count)
  }

}
