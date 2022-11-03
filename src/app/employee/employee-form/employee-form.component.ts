import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, mergeMap, Observable } from 'rxjs';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public empForm: FormGroup;
  public isSubmitted: boolean = false;
  public employee: Employee[] = [];
  // public combinedValue!:Observable<any>;
  // private firstname!: FormControl;
  // private lastname!: FormControl;
  /**
   * 
   * @param fb 
   */
  constructor(private fb: FormBuilder) {
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
      this.employee.push(this.empForm.value);
      console.log(this.employee);
    }
  }

  /**
     *  Onclick Reset button
     */
  onReset() {
    this.empForm.reset();
  }

  ngOnInit(): void {

  //  this.combinedValue = this.firstname.valueChanges.pipe(mergeMap(s1=>
  //   {
  //     return this.lastname.valueChanges.pipe(map(s2 => s1 + '' + s2));
  //   })) 
  }


}
