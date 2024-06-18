import { Component, OnInit } from "@angular/core";
import { CaptchaService } from "../../service/captcha.service";

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']

})
export class LoginComponent implements OnInit{


    public code:string = '';
    constructor(private captcha : CaptchaService){

    }
    ngOnInit(): void {
        this.code = this.captcha.GenerationCode();
    }

    newCode() {
        this.code = this.captcha.GenerationCode();
    }

}