import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentUser } from '../classes/CurrentUser';

const httpOptions = {
  headers: new HttpHeaders(
  { 
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json'
  }
  )
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  postUser(username:string,password:string):Observable<CurrentUser>{
    let address:string="http://localhost:8080/user/";
    let body:string= '{ "username": "' + username + '", "password":"' + password + '" }';

    return this.http.post<CurrentUser>(address, body, httpOptions);
  }
}
