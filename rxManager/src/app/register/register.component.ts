import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registration: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
    ) { }
  

  ngOnInit() {
    this.registration = this.formBuilder.group({
      firstName: ['', Validators.required, Validators.minLength(3)],
      userName: ['', Validators.required, Validators.minLength(3)],
      password: ['', Validators.required, Validators.minLength(6)],
      confirmPassword: ['', Validators.required, Validators.minLength(6)]
    })
  }

  get f() {return this.registration.controls};

  onSubmit() {
    this.submitted = true;

    if (this.registration.invalid){
      return;
    }
    this.loading = true;
    this.userService.register(this.registration.value)
    .pipe(first())
    .subscribe(
      data => {
        this.alertService.success('Registration Successful', true);
        this.router.navigate(['/home']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      })

  }
}


