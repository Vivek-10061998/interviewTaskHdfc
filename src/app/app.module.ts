import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { ApiserviceService } from './apiservice.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//import { SignupComponent } from './signup/signup.component';
//import { LoginComponent } from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    LoginComponent,
    SignupComponent,
   // SignupComponent,
   // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
