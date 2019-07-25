import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpHeaderResponse} from '@angular/common/http';
import {Message} from '../classes/message';
import {Observable} from 'rxjs';
import { Channel } from '../classes/Channel';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class CmChatService {
  CHANNELID
    address='http://localhost:8080/channel/';
    messages:Observable<Message[]>;
    
      constructor(private http:HttpClient) { }
      
      getData(channelId:number){
        return this.http.get<Message[]>(this.address+channelId);
      }
      postMessage(fromId:number,channelId:number,message:string){
        const toSend=new Message();
        toSend.userId=fromId;
        toSend.message=message;
        this.http.post(this.address+channelId,toSend,httpOptions).subscribe(response=>console.log(response));
      }
    }
    

