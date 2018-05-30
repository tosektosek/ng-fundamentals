import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '..';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent;

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am')
      return 'green bold';
    return '';
  }

  constructor() { }

  ngOnInit() {
  }

}
