import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  selected:string = "channel";
  constructor() { }


}
