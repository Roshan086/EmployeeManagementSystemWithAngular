import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationParams } from 'src/app/utill/PaginationParams';
import { Department } from './department';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  
  departments: Department [] = [];

  paginationParams : PaginationParams = new PaginationParams();

  constructor(private departmentService: DepartmentService,private router : Router) { }

  ngOnInit(): void {
    this.getAllDepartmentsWithPagination(this.paginationParams);

  }

  getAllDepartmentsWithPagination(params:any){
    this.departmentService.getAllWithPagination(params).subscribe(response =>{
      this.paginationParams.totalItems = response.totalElements;
      console.log(this.paginationParams);
      this.departments = response.data;
    });
  }


  getDepartments(){
    this.getAllDepartmentsWithPagination(this.paginationParams);
  }
  deleteDepartment(id:number){
    this.departmentService.deleteDepartment(id).subscribe(data=>{
      this.getDepartments();
    })
  }
  updateDepartment(id:number){
    this.router.navigate(['updateDepartment',id]);
  }

  
  pageChange(page:number){
    this.paginationParams.currentPage = page-1;
    this.getAllDepartmentsWithPagination(this.paginationParams);
    this.paginationParams.currentPage = page;
  }

}
