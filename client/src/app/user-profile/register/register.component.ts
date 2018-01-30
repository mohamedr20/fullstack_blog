import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private auth:AuthService) { }

  ngOnInit() {
    this.buildForm()
    this.registerForm.valueChanges.subscribe(data=>console.log(data));
  }

  
  signup(){
    return this.auth.register(this.registerForm.value)
  }

  buildForm(){
    this.registerForm = this.fb.group({
      'username':['',[

      ]],
      'email':['',[
        Validators.required,
        Validators.email
      ]
    ],
    'password':['',[
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      Validators.minLength(6),
      Validators.maxLength(18)
    ]]
    });
    this.registerForm.valueChanges.subscribe(data=>this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?:any){
    if(!this.registerForm){return; }
    const form  =this.registerForm;
    for(const field in this.formErrors){
      this.formErrors[field] = '';
      const control = form.get(field);
      if(control && control.dirty && !control.valid){
        const messages  = this.validationMessages[field];
        for(const key in control.errors){
          this.formErrors[field] +=messages[key]+ '';
        }
      }
    }
  }

  formErrors = {
    'email':'',
    'password':'',
  };
  validationMessages = {
    'email': {
      'required':      'Email is required.',
      'email':         'Email must be a valid email',
      'user': 'User not found, please register if you do not have an account.'
    },
    'password': {
      'required':      'Password is required.',
      'pattern':       'Password must be include at one letter and one number.',
      'minlength':     'Password must be at least 4 characters long.',
      'maxlength':     'Password cannot be more than 40 characters long.',
    }
  };
}
