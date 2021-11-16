import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './human-resources/department/add-department/add-department.component';
import { Department } from './human-resources/department/department';
import { DepartmentComponent } from './human-resources/department/department.component';

const routes: Routes = [
  {
    path:'department',
    component:DepartmentComponent,
  },
  {
    path:'addDepartment',
    component:AddDepartmentComponent,
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
