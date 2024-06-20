import { Component } from '@angular/core';
import { FakeStoreProductContract } from '../../contract/FakeStore';
import { FakestoreService } from '../../service/fakestore.service';

@Component({
  selector: 'app-amazon-mens',
  templateUrl: './amazon-mens.component.html',
  styleUrl: './amazon-mens.component.css'
})
export class AmazonMensComponent {
  public products: FakeStoreProductContract[] = [];
  constructor(private data:FakestoreService){

  }
  ngOnInit(): void {
    this.data.GetSpecificCategory("men's clothing").subscribe(data => this.products = data)
  }
}
