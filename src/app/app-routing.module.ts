import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuradGuard } from './auth-gurad.guard';
import { AddDepartmentComponent } from './human-resources/department/add-department/add-department.component';
import { Department } from './human-resources/department/department';
import { DepartmentComponent } from './human-resources/department/department.component';

const routes: Routes = [
  {
    path:'department',
    component:DepartmentComponent,
    canActivate:[AuthGuradGuard]
  },
  {
    path:'addDepartment',
    component:AddDepartmentComponent,
    canActivate:[AuthGuradGuard]
  },
  {
    path:'updateDepartment/:id',
    component:AddDepartmentComponent,
    canActivate:[AuthGuradGuard]
  },
  /*
  {
    path:'addDepartment',
    component:AddDepartmentComponent,
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
