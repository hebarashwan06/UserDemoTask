import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../User';

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
/** createUser component*/
export class CreateUserComponent {
  empformbtn: string = 'Save';
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
  }

  addForm: FormGroup;
  btnvisibility: boolean = true;
  ngOnInit() {

    this.addForm = this.formBuilder.group({
     Name: ['', Validators.required],
     IsActive: []
    });

  } 
    
  onSubmit() {
    this.userService.createUser(this.addForm.value);
    this.router.navigate(['Users']);
 }
  
}  
  
