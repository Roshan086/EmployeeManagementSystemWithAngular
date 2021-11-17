import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  department : Department = new Department();
  id:number=0;

  constructor(private router : Router,private route : ActivatedRoute,
    private departmentService: DepartmentService) { }

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.departmentService.getDepartment(this.id).subscribe(data=>{
      this.department = data;
    })
    console.log("rr",this.department);
  }

  saveDepartment(){
    alert(this.department.id);
    this.departmentService.saveDepartment(this.department).subscribe(data=>{
      console.log(data);  
      this.router.navigate(['/department']);
  });
}
    onSubmit(){
      console.log("Departmnent ",this.department);
      this.saveDepartment();
    }
}
