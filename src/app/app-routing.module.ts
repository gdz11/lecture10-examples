import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
    path: 'students', loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canActivate: [authGuard] 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
