import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginService } from './login.service';
import { Channel } from '../classes/Channel';
import { ChannelPK } from '../classes/ChannelPk';

const httpOptions = {
  headers: new HttpHeaders(
  { 
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json'
  }
  )
};

@Injectable({
  providedIn: 'root'
})
export class CmListService {
  constructor(
    private http:HttpClient,
    private loginService:LoginService
    ) {}

    //:Observable<Channel[]>
    getChannelList():Observable<Channel[]>{
      let address = environment.apiURL + "channel/getById/" + this.loginService.currentUser.user_id;
      console.log(address);
      return this.http.get<Channel[]>(address, httpOptions);
    }

    pushArray(){

    }

    getChannelPKList():Observable<ChannelPK[]>{
      let address:string = environment.apiURL + "channel/userchannels/" + this.loginService.currentUser.user_id;
      console.log(address);
      return this.http.get<ChannelPK[]>(address, httpOptions);
    }
}
