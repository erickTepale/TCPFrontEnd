import { Component, OnInit } from '@angular/core';
import {Message} from 'src/app/classes/message';
import {LoginService} from 'src/app/services/login.service';
import { CmChatService } from 'src/app/services/cm-chat.service';
import { User } from 'src/app/classes/User';
import { CurrentUser } from 'src/app/classes/CurrentUser';
import { Socket1Service } from 'src/app/services/socket1.service';
import { UserService } from 'src/app/services/user.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

import { CmListService } from 'src/app/services/cm-list.service';
import { Channel } from 'src/app/classes/Channel';
@Component({
  selector: 'app-cm-chatpage',
  templateUrl: './cm-chatpage.component.html',
  styleUrls: ['./cm-chatpage.component.css']
})
export class CmChatpageComponent implements OnInit {
  listUsers:CurrentUser[];
  messages:Message[];
  allUser: CurrentUser[];
  dataRefresher: any;
  messageBody: string;
  stompClient = null;
  channel: string = null;

  showSignInModal:boolean;
  constructor(private cmService:CmChatService,
              private loginService:LoginService,
              private cmLService: CmListService,
              // private socket:Socket1Service,
              private userService:UserService,
              private sockService: WebSocketService
              ) { }

  ngOnInit() {
    this.channel = this.cmService.channel.channel_name;
    this.getCMdata();
    this.getAllUsers();
    this.stompClient = this.sockService.getStompClient();
    this.stompClient.connect({}, frame => {
      this.stompClient.subscribe('/channel/' + this.cmService.channel.channel_id, messageOutput => {
        this.messages.push(JSON.parse(messageOutput.body));
      });
  });
    //this.socket.initializeWebSocketConnection();
    // this.refreshData();

  }
getCMdata(){this.cmService.getData().subscribe(
  data => {
    this.messages = data;
  }
);
}
onClick() {
  this.cmService.postMessage(
    this.loginService.currentUser.user_id, this.messageBody);
  this.messageBody = '';
}

getAllUsers(){
  this.userService.getAllUserData().subscribe(users => {
    this.allUser = users;
  });
}

refreshData() {
  this.dataRefresher =
    setInterval(() => {
      this.getCMdata();
      //Passing the false flag would prevent page reset to 1 and hinder user interaction
    }, 30000);
}

listUser(){
  this.userService.getAllUserData().subscribe(
    listUsers=>{
      this.listUsers=listUsers;
    }
  );

}
onCreate(){
  this.showSignInModal=true;
  this.userService.getAllUserData();
  this.listUser();
}
listuserClick(currentUser){
  //this.listUsers=this.userService.getAllUserData
  this.cmLService.addUser(currentUser.user_id,this.cmService.channel);
 
}
changeDisplay(){
 this.showSignInModal=false;
}

}