import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: ApiserviceService, private router: Router, private _http: HttpClient) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: [''],
      password: [''],
      email: ['']
    })
  }
  login() {
    console.log(this.loginForm.value);

    this.service.getUserList().subscribe(res => {
      console.log(res);
      const user = res.data.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        alert('Login Succesful')
        this.loginForm.reset()
        this.router.navigate(['read'])
      }

    }
    )

  }
}
