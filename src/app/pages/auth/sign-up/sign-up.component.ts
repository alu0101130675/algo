import { Component } from '@angular/core';
import { OptionsForms } from '@auth/form/form.component';
import { ACTIONS } from '@shared/constants/constant';

@Component({
  selector: 'app-sign-up',
  template: `<app-form [options]="options"></app-form>`,
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  options: OptionsForms ={
    id: ACTIONS.signUp,
    label: ACTIONS.signUp
  }
}
