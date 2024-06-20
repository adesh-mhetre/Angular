import { Component, OnInit } from '@angular/core';
import { FakeStoreProductContract } from '../../contract/FakeStore';
import { ActivatedRoute } from '@angular/router';
import { FakestoreService } from '../../service/fakestore.service';

@Component({
  selector: 'app-amazon-more-details',
  templateUrl: './amazon-more-details.component.html',
  styleUrl: './amazon-more-details.component.css'
})
export class AmazonMoreDetailsComponent implements OnInit{
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
