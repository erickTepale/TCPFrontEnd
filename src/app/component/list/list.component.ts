import { Component, OnInit } from '@angular/core';
import { CmListService } from '../../services/cm-list.service';
import { DmListService } from '../../services/dm-list.service';
import { NavService } from '../../services/nav.service';
import { Channel } from 'src/app/classes/Channel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  channels:Channel[];

  constructor(
    private cmService: CmListService,
    private dmService: DmListService,
    private navService: NavService
  ) { }

  ngOnInit() {
      this.listChan();
  }

  listChan(){
    console.log("inside listChan");
    this.cmService.getChannelList()
      .subscribe(channels =>
        {
          console.log(channels);
          this.channels = channels;
        }
      );
  }
  listDM(){
    console.log("inside listDM");
  }

}
