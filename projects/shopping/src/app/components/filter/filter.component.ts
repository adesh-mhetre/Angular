import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() public AllCount:number = 0;
  @Input() public ElectronicCount:number = 0;
  @Input() public JewelleryCount:number = 0;
  @Input() public MensCount:number = 0;
  @Input() public WomensCount:number = 0;
  
  public CategoryName:string = 'all';
  
  @Output() public CategoryChanged:EventEmitter<string> = new EventEmitter<string>();
  @Output() public SendClick:EventEmitter<any> = new EventEmitter<any>();

  public SendCategoryName(e:any) {
    this.CategoryChanged.emit(e.target.value);
  }

  public SendClickButton(e:any) {
    this.SendClick.emit({name:'samsung tv', price:'10000'});
  }
}
