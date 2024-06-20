import { Component } from '@angular/core';
import { FakeStoreProductContract } from '../../contract/FakeStore';
import { FakestoreService } from '../../service/fakestore.service';

@Component({
  selector: 'app-amazon-electronics',
  templateUrl: './amazon-electronics.component.html',
  styleUrl: './amazon-electronics.component.css'
})
export class AmazonElectronicsComponent {
  public products: FakeStoreProductContract[] = [];
  constructor(private data:FakestoreService){

  }
  ngOnInit(): void {
    this.data.GetSpecificCategory('electronics').subscribe(data => this.products = data)
  }
}
