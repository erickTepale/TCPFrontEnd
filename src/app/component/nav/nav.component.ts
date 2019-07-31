
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild(ListComponent, null) listComponent: ListComponent;
  location:string = "#Channels";
  constructor(
    private loginService: LoginService,
    private router: Router,
    private navService: NavService
    ) {}

  ngOnInit() {

  }

  toChan(){
    //updates the service display for nav
    this.navService.selected = "channel";

    // updates the heading display
    this.location="#Channels";

    //update the display list
    this.listComponent.listChan();
    
    //change button colors
    this.changeColor("chan");

    //show add channel button
    this.listComponent.showButton();
  }
  toDM(){
    //updates the service display for nav
    this.navService.selected = "dm";

    // updates the heading display
    this.location = "#Direct Messages";

    //update the list displayed
    this.listComponent.listDM();

    //changes button colors
    this.changeColor("dm");

    //hide add channels
    this.listComponent.hideButton();
  }
  
  goCM() {
    this.router.navigate(['CM']);
  }

  changeColor(value:string){
    if(value == "chan"){
      document.getElementById("chan").className = "btn btn-primary btn-lg";
      document.getElementById("dm").className = "btn btn-secondary btn-lg";
    }else if(value == "dm"){
      document.getElementById("dm").className = "btn btn-primary btn-lg";
      document.getElementById("chan").className = "btn btn-secondary btn-lg";
    }
  }

  goDM() {
    this.router.navigate(['DM']);
    console.log('?');
  }
}
