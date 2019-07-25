import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../classes/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Observable<User>;
  allUsers: Observable<User[]>;

  constructor(private http: HttpClient) { }

  getUserData(id: number): Observable<User> {
    const address = 'http://localhost:8080/user/id/' + id;

    return this.http.get<User>(address, httpOptions);

  }

  getAllUserData(): Observable<User[]> {
    const address = 'http://localhost:8080/user';

    return this.http.get<User[]>(address, httpOptions);

  }
}
