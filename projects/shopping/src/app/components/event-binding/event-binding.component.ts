import { publishFacade } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {


//     Button Class : ${e.target.className} <br>
//     X Position   : ${e.clientX} <br>
//     Ctrl Key     : ${e.ctrlKey}
//   `);
//   }
// public img_src = "assets/shoe.png";
// public styleObject:{position:string,left:string,top:string}={
//   position:'',
//   left:'',
//   top:''
// }
// public changeColor(e:any){
//   this.img_src = `assets/shoe${e.target.name}.png`
// }
// public MouseMove(e:any)
// {
//   this.styleObject={
//     position:'fixed',
//     left:e.clientX+'px',
//     top:e.clientY+'px'
//   }
// }

  // public InsertClick(e: any):void {
  //   document.write(`
  //     Button Id    : ${e.target.id} <br>
  //     Button Name  : ${e.target.name} <br>
  //     Button Class : ${e.target.className} <br>
  //     X Position   : ${e.clientX} <br>
  //     Ctrl Key     : ${e.ctrlKey}
  //   `);
  //   }

    // public img_src = "assets/shoe.png";
    // public styleObject:{position:string,left:string,top:string}={
    //   position:'',
    //   left:'',
    //   top:''
    // }

    // public changeColor(e:any){
    //   this.img_src = `assets/shoe${e.target.name}.png`
    // }
    // public MouseMove(e:any)
    // {
    //   this.styleObject={
    //     position:'fixed',
    //     left:e.clientX+'px',
    //     top:e.clientY+'px'
    //   }
    // }


    //--------------Key Press------------------

  public user:any[]=[
    {Username:'adesh'},
    {Username:'adesh12'},
    {Username:'ad_mh'},
    {Username:'david'}
  ];
  
  public UserError:string = '';
  public isInValid:boolean = false;
  public capsOn:boolean = false;
  public VerifyUser(e:any){
    for(var user of this.user)
      {
        if(user.Username==e.target.value)
          {
            this.UserError = 'User Name Taken';
            this.isInValid=true;
            break;
          }
          else{
            this.UserError="Username available";
            this.isInValid=false;
          }
      }
  }

  public CapsOn(e:any) {
    if(e.keyCode>=65 && e.keyCode<=95)
      {
        this.capsOn=true;
      }
      else{
        this.capsOn=false;
      }
    
  }

  verifyRequired(e:any) {
    if(e.target.value==""){
      this.UserError="Username Required";
      this.isInValid=true;
    } 
    else{
      if(this.isInValid==false)
        {
          this.UserError="";
        }
    }
  }
}
