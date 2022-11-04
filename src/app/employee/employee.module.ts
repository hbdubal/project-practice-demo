import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    OverlayModule
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
