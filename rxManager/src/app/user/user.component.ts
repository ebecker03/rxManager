import { Component, OnInit } from '@angular/core';
import { MedData } from '../med-data';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  
})
export class UserComponent implements OnInit {
  // meds: MedData = {
  //   name: "value",
  //   strength: 'value',
  //   directions: 'value'
  // }
  log(x) {console.log(x);}
  // value: string = "";
  
  constructor() { }

  
  // onEnter(value: string) {this.value=value;}
  
  ngOnInit() {
  }

}
