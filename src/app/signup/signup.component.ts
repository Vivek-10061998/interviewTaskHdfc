import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
 signupForm!:FormGroup
 constructor(private formBuilder:FormBuilder,private service:ApiserviceService,private _http:HttpClient,private router:Router){}
  ngOnInit(): void {
   this.signupForm =this.formBuilder.group({
    name:[''],
    email:[''],
    password:['']
   })
  }
  //method to create new user;
  signup(){
this.service.userSignup(this.signupForm.value).subscribe((res)=>{
  console.log(res);
  
  alert("Registration Succesful");
     
       this.signupForm.reset();
      this.router.navigate(['login'])
},err=>{
  alert("OOPs SOMETHING WENT WRONG")
})
  }
}
