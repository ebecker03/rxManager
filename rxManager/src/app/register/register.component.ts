import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registration: FormGroup;

  constructor(private fb: FormBuilder) { }
  

  ngOnInit() {
    this.registration = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required]],
      agree: [false, [Validators.requiredTrue]]
    })
  }

  get firstName() {
    return this.registration.get('firstName');
  }

  get lastName() {
    return this.registration.get('lastName');
  }

  get userName() {
    return this.registration.get('userName');
  }

  get passWord() {
    return this.registration.get('passWord');
  }
}


