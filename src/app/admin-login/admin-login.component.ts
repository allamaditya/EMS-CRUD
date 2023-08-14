import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private http : HttpClient,private router :Router){ }
  try = {
    username :'',
    password : ''
  }
  ngOnInit(): void {
    
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupAdmin")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.try.username && a.password === this.try.password
        console.log(this.try.username);
        console.log(this.try.password);
      });
      if(user){
        alert("Login Successful");
        this.router.navigate(['dashboard'])
      }else {
        alert("User Not Found!!");
      }
    },err=>{
      alert("Something went wrong")
    })

  }

}
