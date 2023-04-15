import { Component } from '@angular/core';

@Component({
  selector: 'app-easter-event-binding',
  templateUrl: './easter-event-binding.component.html',
  styleUrls: ['./easter-event-binding.component.css']
})
export class EasterEventBindingComponent {

  name:string="Michael";

  ChangeName(){
    this.name="Archer";
  }

}
