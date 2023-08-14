import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dashboard.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit{

  //for form inputs
  formValue !: FormGroup ;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder:  FormBuilder,
    private api : ApiService){}
    //for dual data binding
    try={
        firstName : '',
        lastName : '',
        leaveBalance : '',
        employmentHistory : '',
        reportsTo : '',
        salary : '',
    }

  ngOnInit(): void {
      this.formValue = this.formbuilder.group({
        firstName : [''],
        lastName : [''],
        leaveBalance : [''],
        employmentHistory : [''],
        reportsTo : [''],
        salary : [''],
      })
    
      this.getAllEmployee();
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postEmployeeDetails(){
    this.employeeModelObj.firstName = this.try.firstName;
    this.employeeModelObj.lastName = this.try.lastName;
    this.employeeModelObj.leaveBalance = this.try.leaveBalance;
    this.employeeModelObj.employmentHistory = this.try.employmentHistory;
    this.employeeModelObj.reportsTo = this.try.reportsTo;
    this.employeeModelObj.salary = this.try.salary;
    console.log(this.employeeModelObj)

    this.api.postEmployee(this.employeeModelObj)
   .subscribe(res=>{
    
    Swal.fire("Employee Added").then((result:any)=>{
      window.location.reload()
    })      
     let ref = document.getElementById('cancel')
     ref?.click();
     this.formValue.reset();
     this.getAllEmployee();
   },
   err=>{
    Swal.fire("Deleted").then((result:any)=>{
      window.location.reload()
    })      
   })
  }
  getAllEmployee(){
    this.api.getEmployee()
      .subscribe(res=>{
        this.employeeData = res;
      })
  }
  deleteEmployee(row : any){
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      Swal.fire("Employee Deleted").then((result:any)=>{
        window.location.reload()
      })      
     
    })
  }
  onEdit(row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.employeeModelObj.id = row.id;
  }
  updateEmployeeDetails(){
    this.employeeModelObj.firstName = this.try.firstName;
    this.employeeModelObj.lastName = this.try.lastName;
    this.employeeModelObj.leaveBalance = this.try.leaveBalance;
    this.employeeModelObj.employmentHistory = this.try.employmentHistory;
    this.employeeModelObj.reportsTo = this.try.reportsTo;
    this.employeeModelObj.salary = this.try.salary;

    this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res=>{
      Swal.fire("Employee Updated").then((result:any)=>{
        window.location.reload()
      })      
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })
  }
  
}
