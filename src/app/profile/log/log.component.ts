import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  data1: any;
  data2: any;
  options: any;

  constructor() {
    this.data1 = {
      labels: ['Missed', 'Scheduled', 'Attended'],
      datasets: [
        {
          data: [100, 50, 100],
          backgroundColor: [
            '#2b2b2b',
            '#36A2EB',
            '#b71515'
          ],
          hoverBackgroundColor: [
            '#2b2b2b',
            '#36A2EB',
            '#b71515'
          ]
        }]
    };

    this.data2 = {
      labels: ['Awaiting Confirmation', 'Made'],
      datasets: [
        {
          data: [50, 100],
          backgroundColor: [
            '#36A2EB',
            '#b71515'
          ],
          hoverBackgroundColor: [
            '#36A2EB',
            '#b71515'
          ]
        }]
    };
    this.options = {
      responsive: false,
      // maintainAspectRatio: false
    };

  }

  ngOnInit() {
  }

}
