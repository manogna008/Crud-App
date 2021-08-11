import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
        { path: '', redirectTo: 'Home' },
    { path: 'Home', component: DashboardComponent },
    { path: 'AddEmployee', component: AddEmployeeComponent },
    { path: 'EditEmployee', component: EditEmployeeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class EmployeeRoutingModule {}
  