import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap, Observable } from 'rxjs';
import { OverlayService } from 'src/app/shared/overlay.service';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  @HostBinding('class') classes = 'w-100';
  public empForm: FormGroup;
  public isSubmitted: boolean = false;
  public employee: Employee[] = [];
  public id: any;

  // public combinedValue!:Observable<any>;
  // private firstname!: FormControl;
  // private lastname!: FormControl;
  /**
   * 
   * @param fb 
   */
  constructor(private fb: FormBuilder, public employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute, private overlayService: OverlayService) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);

      if (this.id) {
        this.getCompanybyId();
      }
    })
    this.employee = [];

    this.empForm = this.fb.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern('[a-zA-Z]*')]],
        lastname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern('[a-zA-Z]*')]],
        mobileno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        email: ['', [Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        salary: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      }
    )
  }

  /**
   *  Onclick Submit button
   */
  OnsubmitData() {
    this.isSubmitted = true;
    if (this.empForm.valid) {
      if (this.id) {
        this.updateData();
      }
      else {
        this.employeeService.createData(this.empForm.value).subscribe((res) => {
          this.router.navigate(['employee']);
        })
      }
    }
  }

  /**
   *  Onclick Reset button
   */
  onReset() {
    this.empForm.reset();
  }

  /**
   * Update Data on Click
   */
  updateData() {
    this.employeeService.EditData(this.empForm.value, this.id).subscribe((res) => {
      this.router.navigate(['employee']);
    })
  }

  /**
   * Getby id method
   */
  getCompanybyId() {
    this.employeeService.getDataById(this.id).subscribe((data) => {
      this.empForm.patchValue(data);
    })
  }

  ngOnInit(): void {
  }

}
