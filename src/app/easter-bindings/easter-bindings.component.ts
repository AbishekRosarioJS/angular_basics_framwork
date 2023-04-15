import { Component } from '@angular/core';

@Component({
  selector: 'app-easter-bindings',
  templateUrl: './easter-bindings.component.html',
  styleUrls: ['./easter-bindings.component.css']
})
export class EasterBindingsComponent {
  
  btnDisabled:boolean=true;
  name!:string;
  text:string="No name is added..!"

  constructor(){
    setTimeout(()=>{
      this.btnDisabled=false;
    },3000);
  }

  addName(){
    this.text="your name is" + this.name;
  }
}
