import { Component, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() public MSGFromParent:string = '';

  @Output() public ChildClick:EventEmitter<string> = new EventEmitter<string>();

  public ChildButtomClick(){
    this.ChildClick.emit('Hello ! message form child');
  }
}
