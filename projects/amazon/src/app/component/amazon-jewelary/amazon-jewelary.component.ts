import { Component, OnInit } from '@angular/core';
import { FakeStoreProductContract } from '../../contract/FakeStore';
import { FakestoreService } from '../../service/fakestore.service';

@Component({
  selector: 'app-amazon-jewelary',
  templateUrl: './amazon-jewelary.component.html',
  styleUrl: './amazon-jewelary.component.css'
})
export class AmazonJewelaryComponent implements OnInit{
  public products: FakeStoreProductContract[] = [];
  constructor(private data:FakestoreService){

  }
  ngOnInit(): void {
    this.data.GetSpecificCategory('jewelery').subscribe(data => this.products = data)
  }
}
