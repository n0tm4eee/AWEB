import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    { id: 1, name: 'Alice', position: 'Manager' },
    { id: 2, name: 'Bob', position: 'Developer' },
    { id: 3, name: 'Mae', position: 'Intern' } // Add your name
  ];

  getEmployees() {
    return this.employees;
  }
}
