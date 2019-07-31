import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Message } from '../classes/message';
import { Observable } from 'rxjs';
import { User } from '../classes/User';
import { CurrentUser } from '../classes/CurrentUser';
import { environment } from '../../environments/environment';

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

export class DirectMessageService {

  fromUser: CurrentUser = null;
  // address = 'http://localhost:8080/DM/';
  messages: Observable<Message[]>;

  constructor(private http: HttpClient) { }
  getData(userId: number) {
    return this.http.get<Message[]>(environment.apiURL + "/DM" + this.fromUser.user_id + '/' + userId);
  }

  postMessage(fromId: number, toId: number, message: string) {
    const toSend = new Message();
    toSend.userId = fromId;
    toSend.message = message;
    this.http.post(environment.apiURL + "/DM" + toId,
    toSend, httpOptions).subscribe(response => console.log(response));
  }
}
