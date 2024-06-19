import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  public frmRegister = new FormGroup({
    UserName: new FormControl('Enter Your Name'),
    Age: new FormControl(0),
    Mobile : new FormControl('')
  })

  public SubmitClick(data:any){
    alert(JSON.stringify(data));
  }
}
