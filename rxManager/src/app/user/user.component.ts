import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  
})
export class UserComponent implements OnInit {
  medName: any;
  medStrength: string = '';
  medDirections: string = '';
  med: Object[] = [];
  

  constructor() { }
  
  addMed(){
    
    this.med.push({
      Name: this.medName,
      Strength: this.medStrength,
      Directions: this.medDirections
    })

    this.medName = '';
    this.medStrength = '';
    this.medDirections = '';

    console.log(this.med);
  }

  deleteMed(i){
    this.med.splice(i, 1);
  }

  
  ngOnInit() {
  }
}
