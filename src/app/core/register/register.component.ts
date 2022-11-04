import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public issubmitted = false;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern('[a-zA-Z]*')]],
        lastname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern('[a-zA-Z]*')]],
        email: ['', [Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        mobileno:['', [Validators.required, Validators.pattern('[0-9]*')]],
        country:['', [Validators.required]],
        state:['', [Validators.required]],
        city:['', [Validators.required]]
      }
    )
  }
}
