import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit{
  constructor(private api:ApiService,private Act:ActivatedRoute){}
  ngOnInit(): void {

  
    this.getAllEmployee();
}
employeeData:any;
user:any;
getAllEmployee(){
//getting parameter from url
this.user=this.Act.snapshot.paramMap.get("username");
console.log(this.user)
  this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData = res;
    })
}

}
