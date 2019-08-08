import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Message } from '../classes/message';
import { Observable } from 'rxjs';
import { User } from '../classes/User';
import { CurrentUser } from '../classes/CurrentUser';
import { environment } from '../../environments/environment';
import { WebSocketService } from './web-socket.service';

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
  socketDest = '/app/Dchat/';

  constructor(private http: HttpClient,
              private sockService: WebSocketService) { }
  getData(userId: number) {
    return this.http.get<Message[]>(environment.apiURL + "/DM/" + this.fromUser.user_id + '/' + userId);
  }

    // two user talk to each other will send to same address
  postMessage(fromId: number, toId: number, message: string){
    const toSend = new Message();
    toSend.userId = fromId;
    toSend.message = message;
    let destWithId = this.socketDest + toId + '/' + fromId;
    if (toId > fromId) {
      destWithId = this.socketDest + fromId + '/' + toId;
    }
    this.sockService.sendMessage(destWithId, toSend);

  }
}
