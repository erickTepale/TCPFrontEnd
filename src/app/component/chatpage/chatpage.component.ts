import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';
import { User } from 'src/app/classes/User';
import { DirectMessageService } from 'src/app/services/chat.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { CurrentUser } from 'src/app/classes/CurrentUser';
import { Observable } from 'rxjs';

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


  constructor(private directMessageService: DirectMessageService,
              private loginService: LoginService,
              private userService: UserService) { }

  ngOnInit() {
    this.userTo = this.directMessageService.fromUser.username;
    this.getDMdata();
    this.getUserdata();
    //this.refreshData();
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
        console.log(data);
        this.allUser = data;
      }
    );
  }

  onClick() { //onClick(event: any) {
      this.directMessageService.postMessage(
        this.loginService.currentUser.user_id, this.directMessageService.fromUser.user_id, this.messageBody)
          .subscribe(response => this.messages.push(response));
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
