import { Component } from '@angular/core';

@Component({
  selector: 'app-easter-property',
  templateUrl: './easter-property.component.html',
  styleUrls: ['./easter-property.component.css']
})
export class EasterPropertyComponent {
  isDisabled:boolean=true;
  searchValue:string="Searching me!"
  name:string="hai";

}
