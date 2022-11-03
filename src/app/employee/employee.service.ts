import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public baseUrl: string;

  constructor(public http: HttpClient) {
    this.baseUrl = '  http://localhost:3000/user/'
  }
  
  getData():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.baseUrl)
  }
}
