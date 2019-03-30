import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/shared-module/models/user.model';
import { UserService } from 'src/app/shared-module/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  // getAllUsers(): Observable < User[] > {
  //   this.userService.getUsers()
  //     .subscribe(users => this.users = users);
  //     return 
  // }
}
