import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student-management/student-management.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { Mode } from './models/student-component-mode';
import { unsavedChangesGuard } from '../shared/guards/unsaved-changes.guard';

const routes: Routes = [
  { 
    path: '', 
    component: StudentComponent ,
    children: [
      {
        path: 'search',
        component: StudentSearchComponent
      },
      {
        path: 'edit/:id',
        component: StudentEditComponent,
        data: {
          mode: Mode.Edit
        },
        canDeactivate: [unsavedChangesGuard]
      },
      {
        path: 'new',
        component: StudentEditComponent,
        data: {
          mode: Mode.Create
        },
        canDeactivate: [unsavedChangesGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
