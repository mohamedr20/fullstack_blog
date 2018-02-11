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
import { ProfileComponent } from './user-profile/profile/profile.component';
import { HeaderComponent } from './shared/header/header.component';
import { EditorComponent } from './editor/editor.component';
import { SettingsComponent } from './settings/settings.component';

const appRotes  = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'editor',component:EditorComponent},
  {path:'settings',component:SettingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    EditorComponent,
    SettingsComponent
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
