import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CurrentUser } from '../classes/CurrentUser';
import { environment } from '../../environments/environment';

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

export class LoginService {
  //if all values null then the user is not logged in
  currentUser: CurrentUser = new CurrentUser(null, null, null);

  users:Observable<CurrentUser[]>;

  constructor(private http: HttpClient) { }

  getData(username:string): Observable<CurrentUser[]>{
    console.log(environment.apiURL);
    let address:string = environment.apiURL + "user/" + username;
    return this.http.get<CurrentUser[]>(address, httpOptions);
  }

}
