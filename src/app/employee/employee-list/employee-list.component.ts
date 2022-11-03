import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employee: any;

  constructor(private employeeService: EmployeeService, private router:Router) {
    this.employee = [];
  }

  /**
   * Method call at Initialize time
   */
  ngOnInit(): void {
    this.getEmployeeData();
  }

  /**
   * Get method called
   */
  getEmployeeData() {
    this.employeeService.getData().subscribe((data) => {
      this.employee = data
    });
  }

  onAdd() {
    this.router.navigateByUrl('employee/add');
  }
  
}
