import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  articleForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit() {
    this.buildForm()
  }

  edit(){

  }

  buildForm(){
    this.articleForm = this.fb.group({
      photoUrl:'',
      username:'',
      bio:'',
      email:'',
      password:''
    })

  }

}
