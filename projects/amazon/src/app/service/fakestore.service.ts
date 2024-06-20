import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { FakeStoreProductContract } from "../contract/FakeStore"


@Injectable({
  providedIn: 'any'
})
export class FakestoreService {

  constructor(private http : HttpClient) { }

  public GetProduct(id:string):Observable<FakeStoreProductContract>{
    return this.http.get<FakeStoreProductContract>(`http://fakestoreapi.com/products/${id}`)
  }

  public GetProducts():Observable<FakeStoreProductContract[]>{
    return this.http.get<FakeStoreProductContract[]>("http://fakestoreapi.com/products");
  }

  public GetCategories():Observable<string[]>{
    return this.http.get<string[]>("http://fakestoreapi.com/products/categories ");
  }   
  public GetSpecificCategory(input:any):Observable<FakeStoreProductContract[]>{
    return this.http.get<FakeStoreProductContract[]>(`http://fakestoreapi.com/products/category/${input}`);
  }   


}
