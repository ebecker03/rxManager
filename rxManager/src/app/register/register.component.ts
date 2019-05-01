import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  // validatePassword(): ValidatorFn {
  //   return (control: AbstractControl) => {
  //     let isValid = false;
  //     if (control && control instanceof FormGroup) {
  //       let group = control as FormGroup;
  //       if (group.controls['passwordA'] && group.controls['passwordB']) {
  //         isValid = group.controls['passwordA'].value == group.controls['passwordB'].value;
  //       }
  //     }
  //     if (isValid) {
  //       return null;
  //     } else {
  //       return { 'passwordCheck': 'failed' }
  //     }
  //   }
  // }

  ngOnInit() {
  }

}

// import { Component } from '@angular/core';
// import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material/core';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
//     const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

//     return (invalidCtrl || invalidParent);
//   }
// }

// /** @title Input with a custom ErrorStateMatcher */
// @Component({
//   selector: 'input-error-state-matcher-example',
//   templateUrl: './input-error-state-matcher-example.html',
//   styleUrls: ['./input-error-state-matcher-example.css'],
// })
// export class InputErrorStateMatcherExample {
//   myForm: FormGroup;

//   matcher = new MyErrorStateMatcher();

//   constructor(private formBuilder: FormBuilder) {
//     this.myForm = this.formBuilder.group({
//       password: ['', [Validators.required]],
//       confirmPassword: ['']
//     }, { validator: this.checkPasswords });

//   }

//   checkPasswords(group: FormGroup) { // here we have the 'passwords' group
//     let pass = group.controls.password.value;
//     let confirmPass = group.controls.confirmPassword.value;

//     return pass === confirmPass ? null : { notSame: true }
//   }
// }
