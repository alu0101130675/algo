import { Component } from '@angular/core';
import {OptionsForms} from '@auth/form/form.component';
import { ACTIONS } from '@shared/constants/constant';

@Component({
  selector: 'app-sign-in',
  template: '<app-form [options]="options"></app-form>',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
options: OptionsForms ={
  id: ACTIONS.signIn,
  label: ACTIONS.signIn
}
}
