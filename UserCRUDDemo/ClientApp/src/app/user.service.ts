import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { User } from './User';
import { UserVM } from './UserVM';


@Injectable()
export class UserService {

  url: string = "http://localhost:5000/Api/Users"; 

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/GetUsers');

  }

  createUser(userVM: UserVM) {
    this.http.post(this.url + '/CreateUser', userVM);
  }

  updateUser(user: User) {
    this.http.put(this.url + '/UpdateUser', user);
  }

  deleteUser(id: any) {
    this.http.delete(this.url+'/DeleteUser',id);
  }
}
