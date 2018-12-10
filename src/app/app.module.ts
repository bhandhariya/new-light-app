import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule,CanActivate } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {  AuthGuard } from "./service/auth-guard.service";
import { AuthService } from './service/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { MyPatientComponent } from './my-patient/my-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    PatientComponent,
    MyPatientComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,RouterModule.forRoot([
      {path:'',component:IndexComponent},
      {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
      {path:'index',component:IndexComponent},
      {path:'about',component:AboutComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'dashboard/patient',component:PatientComponent,canActivate:[AuthGuard]},
      {path:'dashboard/mypatient',component:MyPatientComponent,canActivate:[AuthGuard]},
    ])
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
