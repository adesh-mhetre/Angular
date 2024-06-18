import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { FakeStoreProductContract } from '../contracts/FakeStore';


@Injectable({
  providedIn: 'root'
})
export class FakestoreService {

  constructor(private http : HttpClient) { }
  public GetProducts():Observable<FakeStoreProductContract[]>{
    return this.http.get<FakeStoreProductContract[]>("http://fakestoreapi.com/products");
  }

  public GetCategories():Observable<string[]>{
    return this.http.get<string[]>("http://fakestoreapi.com/products/categories ")
  }   
}
