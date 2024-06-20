import { Component, OnInit } from '@angular/core';
import { FakeStoreProductContract } from '../../contract/FakeStore';
import { ActivatedRoute } from '@angular/router';
import { FakestoreService } from '../../service/fakestore.service';

@Component({
  selector: 'app-amazon-details',
  templateUrl: './amazon-details.component.html',
  styleUrl: './amazon-details.component.css'
})
export class AmazonDetailsComponent implements OnInit{

  public id : any = '';
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
  // public Product:FakeStoreProductContract|null = null;
  constructor(private route:ActivatedRoute, private data:FakestoreService){

  }
  ngOnInit(): void {
    // this.route.snapshot.paramMap.get('id');
    this.id = this.route.snapshot.paramMap.get("id");
    this.data.GetProduct(this.id).subscribe(data=> this.Product = data)
  }

}
