import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Message } from '../classes/message';
import { Observable } from 'rxjs';
import { Channel } from '../classes/Channel';
import { Socket1Service } from './socket1.service';
import { environment } from 'src/environments/environment.prod';

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

  constructor(
    private http: HttpClient,
    private socket: Socket1Service
  ) { }
  getData() {
    return this.http.get<Message[]>(this.address + this.channel.channel_id, httpOptions);
  }
  postMessage(fromId: number, message: string){

    const toSend = new Message();
    let created = new Message();
    toSend.userId = fromId;
    toSend.message = message;
    console.log(toSend);

   // this.http.post(this.address + this.channel.channel_id+"/message", toSend, httpOptions).subscribe(response => console.log(response));

     this.http.post<Message>(this.address + this.channel.channel_id + "/message", toSend, httpOptions)
      .subscribe(response => {
        console.log(response);
        // created = response;
        // this.socket.sendMessage(created);
      });
    

  }
}
