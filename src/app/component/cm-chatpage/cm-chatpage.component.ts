import { Component, OnInit } from '@angular/core';
import {Message} from 'src/app/classes/message';
import {LoginService} from 'src/app/services/login.service';
import { CmChatService } from 'src/app/services/cm-chat.service';
import { User } from 'src/app/classes/User';
@Component({
  selector: 'app-cm-chatpage',
  templateUrl: './cm-chatpage.component.html',
  styleUrls: ['./cm-chatpage.component.css']
})
export class CmChatpageComponent implements OnInit {
  messages:Message[];
  allUser: User[];
  constructor(private cmService:CmChatService,
              private loginService:LoginService) { }

  ngOnInit() {
    this.getCMdata();
  }
getCMdata(){this.cmService.getData().subscribe(
  data => {
    this.messages = data;
    console.log(this.messages);
  }
);
}
onKeyDown(event: any) {
  if (event.key === 'Enter') {
    this.cmService.postMessage(
      this.loginService.currentUser.user_id, event.target.value);
    event.target.value = '';
  }
}
}