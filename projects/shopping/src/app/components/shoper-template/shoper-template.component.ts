import { Component, OnInit } from '@angular/core';
import { FakeStoreProductContract } from '../../contracts/FakeStore';

@Component({
  selector: 'app-shoper-template',
  templateUrl: './shoper-template.component.html',
  styleUrl: './shoper-template.component.css'
})
export class ShoperTemplateComponent implements OnInit {


  constructor() { }

  public Categories: string[] = [];
  public Products: FakeStoreProductContract[] = [];
  public CartItems: FakeStoreProductContract[] = [];
  public CartItemsCount:number = 0;
  public isCartVisible: boolean = false;


  public LoadCategories(): void {
    fetch('http://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => {
        data.unshift("all");
        this.Categories = data;
      })
  }

  public LoadProducts(url: string): void {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.Products = data;
      })
  }

  public CategoryChanged(categoryName: String): void {
    if (categoryName == "all") {
      this.LoadProducts(`http://fakestoreapi.com/products`)
      
    }
    else {
      this.LoadProducts(`http://fakestoreapi.com/products/category/${categoryName}`)
    }

  }

  public GetCartItemsCount():void{
    this.CartItemsCount = this.CartItems.length;
  }

  public AddToCartClick(id:number):void{
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>{
      this.CartItems.push(data);
      this.GetCartItemsCount();
      alert(`${data.title} \nAdded to Cart`); 
    })
  }

  public ToggleCart():void{
    this.isCartVisible = (this.isCartVisible==false)?true:false;
  }

  public RemoveClick(index: number) {
    var flag = confirm('Are you sure want to delete?');
    if(flag==true)
    {
      this.CartItems.splice(index,1);
    this.GetCartItemsCount();
    }
    
  }
      

  ngOnInit(): void {
    
    this.LoadCategories();
    this.LoadProducts(`http://fakestoreapi.com/products`);
    this.GetCartItemsCount();
  }
}
