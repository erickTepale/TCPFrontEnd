import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'TCPFrontEnd';
  username:string = this.loginService.currentUser.username;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.currentUser.user_id == null){
      this.router.navigate(['login']);
    }

    if (this.getCookie('user_id') !== '' && this.getCookie('username') !== '') {
      this.loginService.currentUser.user_id = parseInt(this.getCookie('user_id'), 10);
      this.loginService.currentUser.username = this.getCookie('username');
      this.router.navigate(['nav']);
    }
  }

  getCookie(cname: string) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiePairs = decodedCookie.split(';');
    for (const cookiePair of cookiePairs) {
      if (cookiePair.trim().indexOf(name) === 0) {
        return cookiePair.trim().substring(name.length, cookiePair.length);
      }
    }
    return '';
  }

  logout() {
    document.cookie = 'user=;';
    document.cookie = 'username=;';
    this.loginService.currentUser.user_id = null;
    this.loginService.currentUser.username = null;
    this.router.navigate(['login']);

  }

}
