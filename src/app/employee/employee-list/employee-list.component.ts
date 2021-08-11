import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpServiceService } from 'src/app/share/emp-service.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeelist;

  constructor(private ess: EmpServiceService, private router: Router) { }

  editEmpList(id:number) {
    localStorage.removeItem('editEmpId');
    localStorage.editEmpId = JSON.stringify(id);
    this.router.navigate(['EditEmployee']);
    // this.ucs.update(usercontact);
  }

  deleteEmpList(id) {
    this.ess.deleteEmp(id);
    this.employeelist = this.ess.getEmps();
  }
  ngOnInit(): void {
    console.log('usercontact:init');
    this.employeelist = this.ess.getEmps();
    console.log(this.employeelist);
  }

}
