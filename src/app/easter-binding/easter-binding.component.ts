import { Component } from '@angular/core';

@Component({
  selector: 'app-easter-binding',
  templateUrl: './easter-binding.component.html',
  styleUrls: ['./easter-binding.component.css']
})
export class EasterBindingComponent {
  name:string="jesus";
  price:number=20;

  Godsplan(){
    return 'Nayagan Menttum varair'
  }

}
