import { Directive } from '@angular/core';
import { FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appPassword]'
})
export class PasswordDirective {
  validatePassword(): ValidatorFn {
    return (control: AbstractControl) => {
         let isValid = false;
         if (control && control instanceof FormGroup) {
            let group = control as FormGroup;
            if (group.controls['passwordA'] && group.controls['passwordB']) {
              isValid = group.controls['passwordA'].value == group.controls['passwordB'].value;
            }
          }
         if (isValid) {
            return null;
         } else {
            return { 'passwordCheck': 'failed'}
         }
    }
 }
}
