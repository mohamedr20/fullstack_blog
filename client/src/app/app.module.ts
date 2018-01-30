import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './user-profile/auth/auth.service';

import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './user-profile/login/login.component';
import { RegisterComponent } from './user-profile/register/register.component';
import { HomeComponent } from './home/home.component';

import {ReactiveFormsModule,FormsModule} from '@angular/forms';

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
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRotes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
