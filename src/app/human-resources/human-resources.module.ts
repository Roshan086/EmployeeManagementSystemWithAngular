import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DepartmentComponent,
    AddDepartmentComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HumanResourcesModule { }
