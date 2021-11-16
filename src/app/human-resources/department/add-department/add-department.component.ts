import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  constructor(private router : Router,private departmentService: DepartmentService) { }

  department : Department = new Department();
  ngOnInit(): void {

  }

  saveDepartment(){
    this.departmentService.saveDepartment(this.department).subscribe(data=>{
      console.log(data);  
      this.router.navigate(['/department']);
  }

    )};
    onSubmit(){
      console.log("Departmnent ",this.department);
      this.saveDepartment();
    }
}
