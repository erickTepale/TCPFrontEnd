import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpHeaderResponse} from '@angular/common/http';
import {Message} from '../classes/message';
import {Observable} from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class CmService {
address='http://localhost:8080/channel/message/';
messages:Observable<Message[]>;

  constructor(private http:HttpClient) { }
  getData(channelId:number,fromId:number){
    return this.http.get<Message[]>(this.address+'/'+fromId+'/'+channelId);
  }
  postMessage(fromId:number,channelId:number,message:string){
    const toSend=new Message();
    toSend.userId=fromId;
    toSend.message=message;
    this.http.post(this.address+channelId,toSend,httpOptions).subscribe(response=>console.log(response));
  }
}
