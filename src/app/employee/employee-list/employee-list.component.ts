import { Overlay } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
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

  constructor(private employeeService: EmployeeService, private router: Router, private activatedRouter: ActivatedRoute, private http: HttpClient, private overlayService: OverlayService) {
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
    this.empDataPatch.emit(employee);
    this.overlayService.openDialog(EmployeeFormComponent)
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
    }
  }

  /**
   * Add form on button click
   */
  onAdd() {
    this.overlayService.openDialog(EmployeeFormComponent)
  }

}
