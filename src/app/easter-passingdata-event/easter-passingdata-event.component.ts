import { Component } from '@angular/core';

@Component({
  selector: 'app-easter-passingdata-event',
  templateUrl: './easter-passingdata-event.component.html',
  styleUrls: ['./easter-passingdata-event.component.css']
})
export class EasterPassingdataEventComponent {
  name:string="Fizerkhan";

  ChangeEvent(event:Event){
    this.name=(<HTMLInputElement>event.target).value
  }

}
