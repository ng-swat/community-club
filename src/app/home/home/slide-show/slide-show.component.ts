import {Component, OnInit} from '@angular/core';
import {Image} from './image.interface';

const IMAGES: Image[] = [
  {
    'title': 'Come and enjoy the beauty of our venue',
    'url': 'http://angular-up.com/img/about-section/venue.jpg'
  },
  {
    'title': 'Make sure you Subscribe!',
    'url': 'http://angular-up.com/img/sections-background/subscribe.jpg'
  },
  {
    'title': 'Come and learn!',
    'url': 'https://i.imgur.com/uwX18DR.jpg'
  },
  {
    'title': 'Have you seen our new App yet?',
    'url': 'http://angular-up.com/img/sections-background/statistic.jpg'
  },
  {
    'title': 'Think you know whats better? Come and participate in the debate',
    'url': 'https://www.agriya.com/blog/wp-content/uploads/2016/08/Angular2-vs-React.png'
  }];


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})




export class SlideShowComponent implements OnInit {
  public images = IMAGES;

  constructor() {

  }

  ngOnInit() {
  }
}
