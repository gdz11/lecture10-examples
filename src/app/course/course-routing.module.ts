import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { authGuard } from '../shared/guards/auth.guard';

const routes: Routes = [{
  path: 'courses',
  canActivate: [authGuard],
  canActivateChild: [authGuard],
  children: [
    {
      path: '',
      redirectTo: 'search',
      pathMatch: 'full'
    },
    {
      path: 'search',
      component: CourseSearchComponent
    },
    {
      path: 'view/:id',
      component: CourseViewComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
