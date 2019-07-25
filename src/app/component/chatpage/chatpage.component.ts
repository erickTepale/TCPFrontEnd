import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';
import { User } from 'src/app/classes/User';
//import { DirectMessageService } from 'src/app/services/chat.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {
  messages: Message[];
  allUser: User[];
  fromId = 2;

  constructor(//private directMessageService: DirectMessageService,
              private loginService: LoginService,
              private userService: UserService) { }

  ngOnInit() {
    //this.getDMdata();
    this.getUserdata();
  }

  // getDMdata() {
  //   this.directMessageService.getData(this.loginService.currentUser.user_id, this.fromId).subscribe(
  //     data => {
  //       this.messages = data;
  //     }
  //   );

  // }

  getUserdata() {
    this.userService.getAllUserData().subscribe(
      data => {
        console.log(data);
        this.allUser = data;
      }
    );
  }

  // onKeyDown(event: any) {
  //   if (event.key === 'Enter') {
  //     this.directMessageService.postMessage(
  //       this.loginService.currentUser.user_id, this.fromId, event.target.value);
  //     event.target.value = '';
  //   }
  // }
}
