import {Component, OnInit} from '@angular/core';
import {EventRecord} from './event-record.interface';

@Component({
  selector: 'app-log-table',
  templateUrl: './log-table.component.html',
  styleUrls: ['./log-table.component.css']
})
export class LogTableComponent implements OnInit {

  // eventName: string;
  // date: Date;
  // subject: string;
  // host: string;
  // location: string;
  // value: number;

  logRecords: EventRecord[];

  constructor() {
  }

  ngOnInit() {
    this.logRecords = [
      {
        eventName: 'AngularUp',
        date: new Date(),
        subject: 'Angular 2',
        host: 'Nir Kaufman',
        location: 'Tel Aviv',
        value: 500
      },
      {
        eventName: 'Some Meetup',
        date: new Date(),
        subject: 'Some subject',
        host: 'Some dude',
        location: 'fuck knows',
        value: 100
      },
      {
        eventName: 'Learn JS',
        date: new Date(),
        subject: 'JavaScript',
        host: 'Yonatan Ziv',
        location: 'Haifa',
        value: 300
      },
      {
        eventName: 'JohnBryce',
        date: new Date(),
        subject: 'General',
        host: 'Kamilla Katz',
        location: 'Tizi Nabi',
        value: 100
      },
      {
        eventName: 'Feed the mexicans',
        date: new Date(),
        subject: 'Global warming',
        host: 'Benor Biton',
        location: 'Middle east',
        value: 200
      },
      {
        eventName: 'learn React',
        date: new Date(),
        subject: 'React (duh)',
        host: 'Chuck Norris',
        location: 'Ashdod',
        value: 300
      },
      {
        eventName: 'How to cook air',
        date: new Date(),
        subject: 'Cooking',
        host: 'How to basic',
        location: 'California',
        value: 100
      }
    ];

  }

}
