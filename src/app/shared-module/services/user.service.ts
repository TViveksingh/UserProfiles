import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/shared-module/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable < User[] > {
    return this.http.get<User[]>(this.getUsersUrl);
  }
}
