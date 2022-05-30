import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.services';
import { ACTIONS } from '@shared/constants/constant';
import { UserCredentials } from '@supabase/supabase-js';

export interface OptionsForms{
  id:string;
  label: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  authForm !: FormGroup;
  mensaje !:string;
  signIn = ACTIONS.signIn;
  @Input() options!: OptionsForms;
  constructor( 
    private readonly authSvc: AuthService,
    private readonly fb: FormBuilder,
    private readonly router: Router ) { }

  ngOnInit(): void {
    this.initForm();
  }
  async onSubmit(): Promise<void> {
    console.log('save', this.authForm.value);
    const credentials: UserCredentials = this.authForm.value;
    let actionToCall;

    if (this.options.id === ACTIONS.signIn) {
      actionToCall = this.authSvc.signIn(credentials)
    }
    else {
      actionToCall = this.authSvc.signUp(credentials)
    }
    try {
      const result = await actionToCall;
      console.log(result)
      if(result.email) {
        this.redirectUser();
        console.log('home->')
        this.mensaje ="";
      }
      else {
        this.mensaje = result.message;
      }
    } catch (error) {
      console.log(error);
    }
  }
  private initForm(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['',Validators.required]
    })
  }

  private redirectUser():void {
    this.router.navigate(['/home'])
  }
}
