import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseViewComponent } from './course-view/course-view.component';


@NgModule({
  declarations: [
    CourseSearchComponent,
    CourseViewComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
