import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpServiceService } from 'src/app/share/emp-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private ems: EmpServiceService) { }
new:{};
  addForm: FormGroup;
  
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      empId:['', Validators.required],
      empName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      empSalary: ['', Validators.required]
    });
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
    this.new = this.addForm.value;
    this.ems.addEmp(this.new);
    this.router.navigate(['']);
  }
  onCancel() {
    this.router.navigate(['']);
  }
}
