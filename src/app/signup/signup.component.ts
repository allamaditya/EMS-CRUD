import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Form} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupModel } from './signup.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{

  SignupModelObj: SignupModel = new SignupModel();
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) {}
  try = {
    username:'',
    password:'',
  }
  ngOnInit(): void {
  
  }
  signUp(){
    this.SignupModelObj.username=this.try.username;
    this.SignupModelObj.password=this.try.password;

    this.http.post<any>("http://localhost:3000/signupUsers",this.SignupModelObj)
    .subscribe(res=>{
      alert("Signup successful");
      console.log(this.SignupModelObj)
      this.router.navigate(['login']);
    },err=>{
      alert("Signup unsuccessful")
    })

  }

}
