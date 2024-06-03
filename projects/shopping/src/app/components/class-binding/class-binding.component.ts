import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css'
})
export class ClassBindingComponent {

  public bgStyle:string = 'red';
  public textStyle:string = 'white';
  public padding:string="0px";
  public fontSize:string="0px";

  public ApplyClick(){
    this.styleObject = {
      "background-color":this.bgStyle,
      "color":this.textStyle,
      "padding":this.padding+ "px",
      "fontSize":this.fontSize+"px"
    }
  }
  public FontChange(){
    this.styleObject = {
      "background-color":this.bgStyle,
      "color":this.textStyle,
      "padding":this.padding+ "px",
      "fontSize":this.fontSize+"px"
    }
  }
  public styleObject:{'background-color':string , 'color': string, 'padding':string, 'fontSize':string }={
    "background-color":"red",
    "color":"white",
    "padding":"10px",
    "fontSize":"11px"
  }

  
}
