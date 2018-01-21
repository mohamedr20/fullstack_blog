import { Component } from '@angular/core';
import {ExampleService} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private example:ExampleService){
    this.example.getAllArticles()
    .subscribe((data)=>{
      console.log()
    })
  }
}
