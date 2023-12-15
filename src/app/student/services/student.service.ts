import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private endpoint = 'http://localhost:3000/students';

  listStudents(){
    return this.http.get<Student[]>(this.endpoint);
  }

  getStudent(id: number){
    return this.http.get<Student>(this.endpoint+'/'+id);
  }

  updateStudent(student: Student){
    return this.http.put(this.endpoint+'/'+student.id, student);
  }

  createStudent(student: Student){
    return this.http.post(this.endpoint, student);
  }

  constructor(private http: HttpClient) { }
}
