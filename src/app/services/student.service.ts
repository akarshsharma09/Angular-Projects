import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseurl:string="http://localhost:8091";


  constructor(private http:HttpClient) { }

  sendData(data:any){
    return this.http.post(`${this.baseurl}/studentData`,data)
  }

  getData(stdId:any){
    return this.http.get(`${this.baseurl}/fetchStudent?stdId=${stdId}`)
  }
}


