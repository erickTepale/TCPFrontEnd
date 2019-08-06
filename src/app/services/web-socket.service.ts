import { Injectable } from '@angular/core';
// import * as Rx from 'rxjs-compat/Rx';
import { observable } from 'rxjs';
import { CmChatService } from './cm-chat.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  // private subject: Rx.Subject<MessageEvent>;
  // private url:string = "http://localhost:8080/incoming";

  constructor(
     private cmService:CmChatService
   ) { }

  // public connect(): Rx.Subject<MessageEvent>{
  //   if(!this.subject){
  //     this.subject = this.create(this.url);
  //     console.log("Successfulyy Connect: " + this.url);
  //   }
  //   return this.subject;
  // }

  // private create(url): Rx.Subject<MessageEvent>{
  //   let ws = new WebSocket(this.url);
  //   let observable = Rx.Observable.create(
  //     (obs: Rx.Observer<MessageEvent>) => {
  //       ws.onmessage = obs.next.bind(obs);
  //       ws.onerror = obs.error.bind(obs);
  //       ws.onclose = obs.complete.bind(obs);
  //       return ws.close.bind(ws);
  //     }
  //   )
    
  //   let observer = {
  //     next: (data: Object) => {
  //       if(ws.readyState === WebSocket.OPEN){
  //         ws.send(JSON.stringify(data));
  //       }
  //     }
  //   }
  // return Rx.Subject.create(observer, observable);
  // }
}
