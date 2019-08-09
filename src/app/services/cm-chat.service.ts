import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Message } from '../classes/message';
import { Observable } from 'rxjs';
import { Channel } from '../classes/Channel';
//import { Socket1Service } from './socket1.service';
import { environment } from 'src/environments/environment';
import { WebSocketService } from 'src/app/services/web-socket.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS, MESSAGE',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CmChatService {
  channel: Channel = null;
  address =  environment.apiURL + 'channel/';
  messages: Observable<Message[]>;
  socketDest = '/app/chat/';

  constructor(
    private http: HttpClient,
    private sockService: WebSocketService
 
  ) { }
  getData():Observable<Message[]> {
    return this.http.get<Message[]>(this.address + this.channel.channel_id, httpOptions);
  }
  postMessage(fromId: number, message: string): void{
    const toSend = new Message();
    let created = new Message();
    toSend.userId = fromId;
    toSend.message = message;
    this.sockService.sendMessage(this.socketDest + this.channel.channel_id, toSend);

  
      
  }
}
