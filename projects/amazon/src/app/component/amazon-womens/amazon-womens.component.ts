import { Component } from '@angular/core';
import { FakeStoreProductContract } from '../../contract/FakeStore';
import { FakestoreService } from '../../service/fakestore.service';

@Component({
  selector: 'app-amazon-womens',
  templateUrl: './amazon-womens.component.html',
  styleUrl: './amazon-womens.component.css'
})
export class AmazonWomensComponent {
  public products: FakeStoreProductContract[] = [];
  constructor(private data:FakestoreService){

  }
  ngOnInit(): void {
    this.data.GetSpecificCategory("women's clothing").subscribe(data => this.products = data)
  }
}
