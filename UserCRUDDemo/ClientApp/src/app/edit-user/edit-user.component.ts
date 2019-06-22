import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
/** editUser component*/
export class EditUserComponent {
  empformbtn: string = 'Save';
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
  }

  addForm: FormGroup;
  btnvisibility: boolean = true;
  ngOnInit() {

    this.addForm = this.formBuilder.group({
      Name: ['', Validators.required],
      IsActive: ['']
    });

  }

  onSubmit() {
    this.userService.updateUser(this.addForm.value);
    this.router.navigate(['Users']);
  }
}
