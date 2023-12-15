import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

import * as moment from 'moment';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss']
})
export class StudentSearchComponent implements OnInit {

  students$!: Observable<Student[]>;

  ngOnInit(): void {
    this.students$ = this.studentService.listStudents();

    //to load moment and increase bundle size for showing lazy loading benefits
    const t = moment().utc();
  }

  constructor(private studentService: StudentService)
  {

  }

}
