import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {Router,ActivatedRoute} from '@angular/router';
import {ArticleService} from ''
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  articleForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit() {
    this.buildForm()
  }

  publish(){

  }

  buildForm(){
    this.articleForm = this.fb.group({
      title:'',
      description:'',
      article:'',
      tags:''
    })

  }

  // onValueChanged(data?:any){
  //   if(!this.articleForm){return; }
  //   const form  =this.articleForm;
  //   for(const field in this.formErrors){
  //     this.formErrors[field] = '';
  //     const control = form.get(field);
  //     if(control && control.dirty && !control.valid){
  //       const messages  = this.validationMessages[field];
  //       for(const key in control.errors){
  //         this.formErrors[field] +=messages[key]+ '';
  //       }
  //     }
  //   }
  // }

  // formErrors = {
  //   'email':'',
  //   'password':'',
  // };
  // validationMessages = {
  //   'email': {
  //     'required':      'Email is required.',
  //     'email':         'Email must be a valid email',
  //     'user': 'User not found, please register if you do not have an account.'
  //   },
  //   'password': {
  //     'required':      'Password is required.',
  //     'pattern':       'Password must be include at one letter and one number.',
  //     'minlength':     'Password must be at least 4 characters long.',
  //     'maxlength':     'Password cannot be more than 40 characters long.',
  //   }
  // };

}
