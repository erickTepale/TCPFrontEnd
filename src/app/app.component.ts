import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TCPFrontEnd';

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
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
}
