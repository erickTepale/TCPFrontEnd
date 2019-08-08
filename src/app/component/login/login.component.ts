import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CurrentUser } from '../../classes/CurrentUser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUsers: CurrentUser[];
  actualUser: CurrentUser;

  constructor(
    private loginService: LoginService,
    private router: Router
    ){}

  ngOnInit() { }

  login(username: string, password: string){
    this.retrieveLoginData(username, password);
  }

  validateData(password: string){
    for (let i = 0; i < this.currentUsers.length; i++){
      
      if (this.currentUsers[i].password == password){
        //this.actualUser = new CurrentUser(this.currentUsers[i].user_id, this.currentUsers[i].username, null);
        this.loginService.currentUser.user_id = this.currentUsers[i].user_id;
        this.loginService.currentUser.username = this.currentUsers[i].username;

        document.cookie = 'user_id=' + this.loginService.currentUser.user_id + ';';
        document.cookie = 'username=' + this.loginService.currentUser.username + ';';
        this.router.navigate(['nav']);
      }
    }

  }
  onClick(){
    this.router.navigate(['register']);
  }


  retrieveLoginData(username: string, password: string){
    this.loginService.getData(username)
      .subscribe(users => 
        {
          this.currentUsers = users;
          this.validateData(password);
        }
      );
    
    //will print null because it is not back yet ! ^ lul
    //console.log(this.currentUsers);
  }

}
