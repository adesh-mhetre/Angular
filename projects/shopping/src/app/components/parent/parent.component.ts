import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
// export class ParentComponent implements OnChanges{
//   ngOnChanges(changes: SimpleChanges): void {
//     throw new Error('Method not implemented.');
//   }
  
//   public msg = ''; 
//   public msgFromChild:string = '';
//   public SendClick(){
//     this.msg = "Hello ! From Parent";
//   }

//   public GetMessageFromChild(e:string){
//     this.msgFromChild=e;
//   }
// }



//----------------35 th Video------------------
export class ParentComponent{
  public UserName:string|null = null;
}