import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  public msg = '';
  public msgFromChild:string = '';
  public SendClick(){
    this.msg = "Hello ! From Parent";
  }

  public GetMessageFromChild(e:string){
    this.msgFromChild=e;
  }
}
