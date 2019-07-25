import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { User } from '../classes/User';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { CurrentUser } from '../classes/CurrentUser';


@Injectable({
  providedIn: 'root'
})
export class DmListService {

  constructor(private userService: UserService) { }

  getUserList(): Observable<CurrentUser[]> {
    return this.userService.getAllUserData();
  }
}
