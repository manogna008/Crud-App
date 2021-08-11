import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule } from '@angular/router';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddEmployeeComponent, EditEmployeeComponent, DashboardComponent, EmployeeListComponent],
  imports: [
    CommonModule,RouterModule,EmployeeRoutingModule,ReactiveFormsModule
  ]
})
export class EmployeeModule { }
