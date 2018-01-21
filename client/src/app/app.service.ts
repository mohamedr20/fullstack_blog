import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable()

export class ExampleService{
    constructor(private http:HttpClient){
    }

    getAllArticles(){
        return this.http.get('http://localhost:8080/api/users')
    }
}