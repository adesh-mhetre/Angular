import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonCartComponent } from './amazon-cart.component';

describe('AmazonCartComponent', () => {
  let component: AmazonCartComponent;
  let fixture: ComponentFixture<AmazonCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmazonCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmazonCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Write a test for Title() - It must return "Amazon Shopping Cart"
  describe("Cart Title Test",()=>{
    it("Expecting Amazon Shopping Cart as Title",()=>{
      expect(component.Title()).toBe("Amazon Shopping Cart");
    })
  })
  
  
  //Write a test for Total() - It Must return 40000
  describe("Total Test",()=>{
    it("Total must be 40000",()=>{
      expect(component.Total(2,20000)).toBe(40000);
    })
  })

});
