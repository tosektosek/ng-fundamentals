import { ToastrService } from './../../common/toastr.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import { IEvent } from '..';

declare let toastr;

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];
  constructor(private eventService: EventService, private toastrService: ToastrService,
              private route: ActivatedRoute) {
   }

   letters: any[] = [1, 2];
  ngOnInit() {
    while(this.letters.length) {
      this.letters.pop();
    }
    console.log(this.letters);
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }

}
