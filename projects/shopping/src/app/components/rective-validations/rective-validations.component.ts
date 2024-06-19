import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rective-validations',
  templateUrl: './rective-validations.component.html',
  styleUrl: './rective-validations.component.css'
})
export class RectiveValidationsComponent {

  constructor(private fb:FormBuilder){

  }

  public frmRegister = this.fb.group({
    Name : this.fb.control('',[ Validators.required,Validators.minLength(4)]),
    Mobile: this.fb.control('',[Validators.required,Validators.pattern(/\+91\d{10}/)])

  })

  get Name():FormControl{
    return this.frmRegister.get("Name") as FormControl;
  }
  get Mobile():FormControl{
    return this.frmRegister.get("Mobile") as FormControl;
  }
}
