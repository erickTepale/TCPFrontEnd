import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';
import { User } from 'src/app/classes/User';
import { DirectMessageService } from 'src/app/services/chat.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { CurrentUser } from 'src/app/classes/CurrentUser';
import { Observable } from 'rxjs';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {
  messages: Message[];
  allUser: CurrentUser[];
  dataRefresher: any;
  messageBody: string;

  userTo:string = null;
  
  stompClient = null;

  constructor(private directMessageService: DirectMessageService,
              private loginService: LoginService,
              private userService: UserService,
              private sockService: WebSocketService
              ) { }

  ngOnInit() {
    this.userTo = this.directMessageService.fromUser.username;
    this.getDMdata();
    this.getUserdata();
    //this.refreshData();
    this.stompClient = this.sockService.getStompClient();
    this.stompClient.connect({}, frame => {
      this.stompClient.subscribe(this.getSubscribeDest()
      , messageOutput => {
        this.messages.push(JSON.parse(messageOutput.body));
      });
  });
  }

  // two user talk to each other will subscribe to same address
  getSubscribeDest(): string {
    if (this.directMessageService.fromUser.user_id < this.loginService.currentUser.user_id) {
      return '/DM/' + this.directMessageService.fromUser.user_id + '/' + this.loginService.currentUser.user_id;
    } else {
      return '/DM/' + this.loginService.currentUser.user_id + '/' + this.directMessageService.fromUser.user_id;
    }

  }

  getDMdata() {
    this.directMessageService.getData(this.loginService.currentUser.user_id).subscribe(
      data => {
        this.messages = data;
      }
    );

  }

  getUserdata() {
    this.userService.getAllUserData().subscribe(
      data => {
        this.allUser = data;
      }
    );
  }

  onClick() { //onClick(event: any) {
      this.directMessageService.postMessage(
        this.loginService.currentUser.user_id, this.directMessageService.fromUser.user_id, this.messageBody);
      this.messageBody = '';
  }

  refreshData() {
    this.dataRefresher =
      setInterval(() => {
        this.getDMdata();
        //Passing the false flag would prevent page reset to 1 and hinder user interaction
      }, 30000);
  }
}
