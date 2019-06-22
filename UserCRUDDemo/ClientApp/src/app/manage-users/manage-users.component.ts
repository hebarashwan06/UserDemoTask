import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
/** manageUsers component*/

export class ManageUsersComponent implements OnInit {
  allUsers: User[];
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(
        (data: User[]) => this.allUsers = data
    );
  }


  deleteUser(id: number) {
    this.userService.deleteUser(id);
    this.router.navigate(['Users'])
  }

  updateUser(id: number) {
    this.router.navigate(['User', id])
  }
}
