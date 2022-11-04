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
    this.baseUrl = 'http://localhost:3000/user/'
  }

  /**
   * 
   * @returns employee data
   */
  getData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl)
  }

  /**
   * 
   * @param employee 
   * @returns employee details
   */
  createData(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  /**
   * 
   * @param id 
   * @returns get data with id
   */
  getDataById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + id)
  }
  /**
   * 
   * @param employee 
   * @param id 
   * @returns edit employee
   */
  EditData(employee: Employee, id: number): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl + id, employee);
  }

  /**
   * 
   * @param id 
   * @returns delete method
   */
  deleteData(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.baseUrl + id)
  }
}
