import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  register(body){
   body = JSON.stringify(body);
   return this.http.post('http://localhost:8080/api/users',body,{
     headers:new HttpHeaders().set('Content-Type','application/json')
   })
   .subscribe(
     (res)=>console.log(res),
     (err)=>console.log(err)
    )
  }


  login(body){
    return this.http.post('http://localhost:8080/api/users/authenticate',body,{
      headers:new HttpHeaders().set('Content-Type','application/json')
    })
    .subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
     )
  }
}
