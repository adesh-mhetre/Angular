import { Component, OnInit } from '@angular/core';
import { FakestoreService } from '../../service/fakestore.service';
import { FakeStoreProductContract } from '../../contracts/FakeStore';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrl: './service-demo.component.css'
})
export class ServiceDemoComponent implements OnInit {

  public Categories : string[]=[];
  public Products: FakeStoreProductContract[] = [];

  constructor(private fakeStore : FakestoreService){

  }
  ngOnInit(): void {
    this.fakeStore.GetCategories().subscribe(data=>this.Categories=data);
    this.fakeStore.GetProducts().subscribe(data=>this.Products = data);
  }

}
