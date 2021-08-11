import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpServiceService } from 'src/app/share/emp-service.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private ems: EmpServiceService) { }
  addForm: FormGroup;

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   empid = JSON.parse(localStorage.editEmpId);
   
  ngOnInit(): void {
    
    if (!this.empid) {
      alert('Invalid action.');
      this.router.navigate(['']);
      return;
    }
    this.addForm = this.formBuilder.group({
      empId:['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      empName: ['', Validators.required],
      empSalary: ['', Validators.required]
    });
    const data = this.ems.getEmpById(this.empid);
    this.addForm.setValue(data);
  }
  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  isEmailInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  onSubmit() {
    this.ems.updateEmp(this.empid,this.addForm.value);

    this.router.navigate(['']);
  }
  onCancel() {
    this.router.navigate(['']);
  }
}
