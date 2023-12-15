import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mode } from '../models/student-component-mode';
import { Student } from '../models/student';
import { catchError, throwError } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { UnsavedChangesCheck } from '../models/unsaved-changes-check';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit, UnsavedChangesCheck {

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    birthDate: new FormControl('')
  });

  mode: Mode = Mode.Create;

  isLoading = false;

  student: Student = {
    id: -1,
    name: '',
    email: '',
    birthDate: ''
  };

  loadStudent(s: Student){
    this.form.patchValue(s)
  }

  ngOnInit(): void {
    this.route.data.subscribe(c => {
      let mode = c['mode'];
      if(mode == Mode.Edit){
        this.route.paramMap.subscribe(p => {
          let id = +p.get('id')!;

          this.isLoading = true;
          this.studentService.getStudent(id)
          .pipe(catchError(e =>{
            this.isLoading = false;
            alert('failed loading student');
            return throwError(() => new Error("failed loading student"))
          })).subscribe(d => {
            this.student = d;
            this.isLoading = false;

            this.loadStudent(d);
          })
        })
      }
    });
  }
  
  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService){

  }

  hasUnsavedChanges(): boolean {
    let current = this.form.value;
    let original = this.student;
    return original.name != current.name || original.email != current.email || original.birthDate != current.birthDate;
  }
}
