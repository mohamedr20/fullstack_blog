import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name:any;

  
   boolean:boolean  = false;
   constructor() { }
 
   ngOnInit() {
    this.name = this.getProfile();
   }
 
   getProfile(){
     let user = localStorage.getItem('username');
     if(user === undefined){
       return this.boolean;
     }
     this.boolean = true;
     return{
       auth:this.boolean,
       username:user
     }

   }

}
