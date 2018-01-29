import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ExampleService} from './app.service';

import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './user-profile/login/login.component';
import { RegisterComponent } from './user-profile/register/register.component';
import { HomeComponent } from './home/home.component';


const appRotes  = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRotes)
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
