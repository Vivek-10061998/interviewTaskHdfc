import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { ReadComponent } from './read/read.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'create',component:CreateComponent},
  {path:'create/:id',component:CreateComponent},
  {path:'read',component:ReadComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
