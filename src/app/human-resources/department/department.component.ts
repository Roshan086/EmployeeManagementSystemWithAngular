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


  getEmployees(){
    //this.employeeService.getEmployees().subscribe((data : Employee []) =>{
      //console.log(data);
      //this.employees = data;
   // })
  }
  deleteDepartment(id:number){
    //this.employeeService.deleteEmployee(id).subscribe(data=>{
      //this.getEmployees();
    //})
  }
  updateDepartment(id:number){
    this.router.navigate(['create-employee',id]);
  }

  pageChange(page:number){
    this.paginationParams.currentPage = page-1;
    //this.getAllEmployeesWithPagination(this.paginationParams);
    this.paginationParams.currentPage = page;
  }

}
