import { Injectable } from '@angular/core';

@Injectable({
  providedIn:"root"
})
export class CaptchaService {

  public GenerationCode():string{
    var a = Math.random()*10;
    var b = Math.random()*10;
    var c = Math.random()*10;
    var d = Math.random()*10;
    var e = Math.random()*10;
    var f = Math.random()*10;
    // var code = `${Math.round(a)} ${Math.round(b)} ${Math.round(c)} ${Math.round(d)} ${Math.round(e)} ${Math.round(f)}`
    var code = `${Math.floor(a)} ${Math.floor(b)} ${Math.floor(c)} ${Math.floor(d)} ${Math.floor(e)} ${Math.floor(f)}`
    return code;
  }

  constructor() { }

}
