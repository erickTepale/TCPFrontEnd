import { Component, OnInit } from '@angular/core';
import {Message} from 'src/app/classes/message';
import {LoginService} from 'src/app/services/login.service';
import { CmChatService } from 'src/app/services/cm-chat.service';
import { User } from 'src/app/classes/User';
import { CurrentUser } from 'src/app/classes/CurrentUser';
import { Socket1Service } from 'src/app/services/socket1.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-cm-chatpage',
  templateUrl: './cm-chatpage.component.html',
  styleUrls: ['./cm-chatpage.component.css']
})
export class CmChatpageComponent implements OnInit {
  messages:Message[];
  allUser: CurrentUser[];
  dataRefresher: any;
  messageBody: string;

  constructor(private cmService:CmChatService,
              private loginService:LoginService,
              private socket:Socket1Service,
              private userService:UserService) { }

  ngOnInit() {
    this.getCMdata();
    this.getAllUsers();
    this.socket.initializeWebSocketConnection();
    // this.refreshData();
  }
getCMdata(){this.cmService.getData().subscribe(
  data => {
    this.messages = data;
    console.log(this.messages);
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
    console.log(this.allUser);
  });
}

refreshData() {
  this.dataRefresher =
    setInterval(() => {
      this.getCMdata();
      //Passing the false flag would prevent page reset to 1 and hinder user interaction
    }, 30000);
}
}