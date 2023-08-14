import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Form} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminSignupModel } from './admin-signup.model';


@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit{

  AdminSignupModelObj: AdminSignupModel = new AdminSignupModel();
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) {}
  try = {
    username:'',
    password:'',
  }
  ngOnInit(): void {
  
  }
  signUp(){
    this.AdminSignupModelObj.username=this.try.username;
    this.AdminSignupModelObj.password=this.try.password;

    
    this.http.post<any>("http://localhost:3000/signupAdmin",this.AdminSignupModelObj)
    .subscribe(res=>{
      alert("Signup successful");
      console.log(this.AdminSignupModelObj)
      this.router.navigate(['admin-login']);
    },err=>{
      alert("Signup unsuccessful")
    })

  }
}