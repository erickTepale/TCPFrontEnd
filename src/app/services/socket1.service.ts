import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Message } from '../classes/message';

@Injectable({
  providedIn: 'root'
})
export class Socket1Service {
  //private url:string = "http://localhost:8080/socket";
  private messages:Message[]; 
  private stompClient;
  constructor(

  ) { 
    //this.initializeWebSocketConnection();
  }

  // initializeWebSocketConnection(){
  //   let ws = new SockJS(this.url);
  //   this.stompClient = Stomp.over(ws);
  //   let that = this;
  //   this.stompClient.connect({}, function(frame) {
  //     that.stompClient.subscribe("/chat/message", (message) => {
  //       // if(message.body) {
  //       //   $(".chat").append("<div class='message'>"+message.body+"</div>")
  //       //   console.log(message.body);
  //       // }
  //       console.log("from other user tho");
  //       console.log(message);
  //     });
  //   });
  // }

  sendMessage(message){
    this.stompClient.send("/app/send/message" , {}, message);
    console.log("scraaa");
    
  }
}
