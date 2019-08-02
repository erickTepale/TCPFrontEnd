import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private registerService:RegisterService,
    private router:Router,
    private loginService:LoginService
  ) { }

  ngOnInit() {
  }
register(username:string,password1:string,password2:string){
  if(this.confirmPasswords(password1,password2)){
    this.registerService.postUser(username,password1)
  .subscribe(response=>{
    this.router.navigate(['login']);
    
  })
}
}

confirmPasswords(password1:string, password2:string):boolean{
  return (password1 == password2);
}
}