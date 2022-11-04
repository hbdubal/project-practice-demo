import { Overlay } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employee: any;
  @Output() empDataPatch = new EventEmitter<string>;
  public data: any[] = [];
  notEmptyPost = true;
  notscrolly = true;

  constructor(private employeeService: EmployeeService, private router: Router, private activatedRouter: ActivatedRoute, private http: HttpClient,private overlay: Overlay) {
    this.empDataPatch = new EventEmitter();
    this.employee = [];
  }

  /**
   * Method call at Initialize time
   */
  ngOnInit(): void {
    this.getEmployeeData();
    this.loadData();
  }

  /**
   * 
   * @param event 
   * Load the Initial 10 posts
   */
  loadData() {
    this.employeeService.getData().subscribe((data) => {
      this.employee = data;
      console.log(data);
    });
  }

  /**
   * Get method called
   */
  getEmployeeData() {
    this.employeeService.getData().subscribe((data) => {
      this.employee = data
    });
  }

  /**
   * 
   * @param employee 
   */
  OnEditData(employee: any) {
    this.router.navigate(['employee/edit', employee])
    this.empDataPatch.emit(employee);
  }

  /**
   * 
   * @param id 
   * Delete Method
   */
  onDeleteData(id: number) {
    if (confirm('Are you sure you want to delete this Data??')) {
      this.employeeService.deleteData(id).subscribe(() => {
        this.getEmployeeData();
      });
      this.router.navigate(['employee/add']);
    }
  }

  /**
   * Add form on button click
   */
  onAdd() {
    this.router.navigateByUrl('employee/add');
  }

}
