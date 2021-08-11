import { Injectable } from '@angular/core';
import { Init } from './init-employee';

@Injectable()
export class EmpServiceService extends Init {

  constructor() {
    super();
    console.log('EmpService Works');
    this.load();
   }

   getEmps() {
     let emp = JSON.parse(localStorage.getItem('Employees'));
     return emp;
   }

   addEmp(newEmp) {
    
      let emp = JSON.parse(localStorage.getItem('Employees'));
      // Add New EmpService
      emp.push(newEmp);
      // Set New Employee
      localStorage.setItem('Employees', JSON.stringify(emp));
   }

   deleteEmp(empId) {
     let emp = JSON.parse(localStorage.getItem('Employees'));

     for(let i = 0; i <emp.length; i++) {
      if(emp[i].empId == empId) {
        emp.splice(i, 1);
      }
   }
      // Set New Employee
      localStorage.setItem('Employees', JSON.stringify(emp));
   }
   getEmpById(id) {
    console.log(id);
    let emp = JSON.parse(localStorage.getItem('Employees'));
    const itemIndex = emp.findIndex(item => item.empId === id);
    console.log(itemIndex);
    return emp[itemIndex];
  }
     updateEmp(id, newData){  
       let emp = JSON.parse(localStorage.getItem('Employees'));

     for(let i = 0; i <emp.length; i++) {
      if(emp[i].empId == id) {
        emp[i] = newData;
      }
   }
      // Set New Employee
      localStorage.setItem('Employees', JSON.stringify(emp));
   }




}

