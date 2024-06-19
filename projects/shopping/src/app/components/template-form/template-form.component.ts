import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  SubmitClick(data : any) {
    alert(JSON.stringify(data))
  }

  public CityError:string="";

  public CityChannged(e:any):void{
    if(e.target.value==-1){
      this.CityError = "Please select your City";
    }
    else{
      this.CityError="";
    }
  }
}