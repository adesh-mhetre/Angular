import { Component, Input, EventEmitter, Output, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
// export class ChildComponent {

//   @Input() public MSGFromParent:string = '';

//   @Output() public ChildClick:EventEmitter<string> = new EventEmitter<string>();

//   public ChildButtomClick(){
//     this.ChildClick.emit('Hello ! message form child');
//   }
// }


//---------------35 th video-------------------
export class ChildComponent {
  @Input() public UserName:string|null = null;
  public currentValue:string | null= null;
  public previousValue:string | null= null;
  public msg:string|null = null;

  ngOnChanges(changes:SimpleChanges){
    for(var property in changes)
    {
        let change = changes[property];
        this.currentValue=change.currentValue;
        this.previousValue=change.previousValue;
     }
    if(this.currentValue==this.previousValue)
    {
      this.msg = "No Change Detected";
    }
    else{
      this.msg="change Detected";
    }
  }
}
