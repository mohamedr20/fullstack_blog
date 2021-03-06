import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userId:string;
  loginForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private activated:ActivatedRoute,private auth:AuthService) { }

  ngOnInit() {
    this.buildForm()
  }

  login(){
    return this.auth.login(this.loginForm.value)
    .subscribe((data)=>{
      this.userId = this.activated.snapshot['id'];
      localStorage.clear()
      localStorage.setItem('user',data["user"])
      localStorage.setItem('username',data["user"]["username"])
      localStorage.setItem('jwt-token',data["token"])
      this.router.navigate(['/profile',data["user"]["id"]]);
    })
  }

  buildForm(){
    this.loginForm = this.fb.group({
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
    this.onValueChanged();
  }

  onValueChanged(data?:any){
    if(!this.loginForm){return; }
    const form  =this.loginForm;
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
