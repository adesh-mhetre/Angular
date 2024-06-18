import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css'
})
export class PipeDemoComponent implements OnInit {
  
  ngOnInit(): void {
    // console.log(JSON.stringify(Product));
    this.Count = this.Messages.length;
  }
  

  // slice
  // public categories : string[] = ["Electronics","Mens Fashion","Womens Fashion", "Kids Fashion", "Footware"];
  
  
  // public Product:{Name:string, Price:number, Mfd:Date, Rate:number}={
    //   Name: 'Samsung Tv',
    //   Price: 34000.30,
    //   Mfd: new Date("2023-01-22"),
    //   Rate : 0.0245
    // }

    // i18nSelect
    // public  Products :{Name:string,ShippedTo:string}[] = [
    //   {Name:"Samsung TV",ShippedTo:"Delhi"},
    //   {Name:"Mobile",ShippedTo:"Hyd"},
    //   {Name:"Watch",ShippedTo:"Goa"},
    //   {Name:"Shirt",ShippedTo:"Mumbai"},
    // ];

    // public Status:any = {
    //   'Delhi':'Delivery in 2 Days',
    //   'Hyd':'Same Day Delivery',
    //   'Mumbai' : 'One Day Delivery',
    //   'other' : 'Usually dispatched in 3/4 working days'
    // };  
    
    public title : string = "weLComE tO AnGuLaR";
    public Messages : string[] = [];
    public Message : string = '';
    public Count : number = 0;
    public ShowMessagaes:boolean = false;
    
    public NotifivationMap = {
      '=0' : 'No New Messages',
      '=1' : 'One New Messages',
      'other' : '# New Messages'
    }

    public SendClick(){
      var now = new Date();
      this.Messages.push(this.Message + " - "+ now.toLocaleTimeString());
      this.Count = this.Messages.length;
      alert("Message Sent");
      this.Message="";
    }

    public ShowClick(){
      this.ShowMessagaes = (this.ShowMessagaes==true)?false:true;
    }
}
