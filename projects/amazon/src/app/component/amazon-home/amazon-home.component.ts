import { Component } from '@angular/core';
import { FakeStoreProductContract } from '../../contract/FakeStore';
import { FakestoreService } from '../../service/fakestore.service';

@Component({
  selector: 'app-amazon-home',
  templateUrl: './amazon-home.component.html',
  styleUrl: './amazon-home.component.css'
})
export class AmazonHomeComponent {
  public products: FakeStoreProductContract[] = [];
  constructor(private data:FakestoreService){

  }
  ngOnInit(): void {
    this.data.GetProducts().subscribe(data => this.products = data)
  }
}
