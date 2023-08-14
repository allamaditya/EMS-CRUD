import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'data/:username', component:EmployeeDataComponent},
  {path: 'dashboard', component:EmployeeDashboardComponent},
  {path: 'admin-login', component:AdminLoginComponent},
  {path: 'admin-signup', component:AdminSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
