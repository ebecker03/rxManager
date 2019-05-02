import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }
    

  ngOnInit() {

    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required]],
    })
  }

  get userName(){
    return this.loginForm.get('userName');
  }

  get passWord(){
    return this.loginForm.get('passWord');
  }

}
