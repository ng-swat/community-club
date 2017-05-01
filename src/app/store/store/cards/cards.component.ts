import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';
import {CardInfo} from 'app/store/store/cards/card-info';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public Cards = [
    {
      logo: 'http://angular-up.com/img/partners/SF.png',
      title: 'Angular Conference',
      balance: '500',
      image: 'http://angular-up.com/img/sections-background/statistic.jpg',
      text: 'Really awesome Angular convention you should come and visit, free snacks, free souveniers',
      fullInfo: `Holder of this coupon is intitled for a free entrance to the Angular Conference that's going to
                  take place in 14.05.2017 at Hertzeliya.`,
      smallLetters: `This coupon can not be passed to someone else. No refunds. Gift will be given upon presentation`
    }, {
      logo: 'http://angular-up.com/img/partners/Belgium.svg',
      title: 'Angular Conference',
      balance: '500',
      image: 'http://angular-up.com/img/tour/deadsea.jpg',
      text: 'Really awesome Angular convention you should come and visit, free snacks, free souveniers',
      fullInfo: `Holder of this coupon is intitled for a free entrance to the Angular Conference that's going to
                  take place in 14.05.2017 at Hertzeliya.`,
      smallLetters: `This coupon can not be passed to someone else. No refunds. Gift will be given upon presentation`
    }, {
      logo: 'http://angular-up.com/img/partners/amsterdam.jpg',
      title: 'Angular Conference',
      balance: '500',
      image: 'http://angular-up.com/img/sections-background/twitter-feed.jpg',
      text: 'Really awesome Angular convention you should come and visit, free snacks, free souveniers',
      fullInfo: `Holder of this coupon is intitled for a free entrance to the Angular Conference that's going to
                  take place in 14.05.2017 at Hertzeliya.`,
      smallLetters: `This coupon can not be passed to someone else. No refunds. Gift will be given upon presentation`
    }, {
      logo: 'http://angular-up.com/img/partners/berlin.jpeg',
      title: 'Angular Conference',
      balance: '500',
      image: 'http://angular-up.com/img/sections-background/subscribe.jpg',
      text: 'Really awesome Angular convention you should come and visit, free snacks, free souveniers',
      fullInfo: `Holder of this coupon is intitled for a free entrance to the Angular Conference that's going to
                  take place in 14.05.2017 at Hertzeliya.`,
      smallLetters: `This coupon can not be passed to someone else. No refunds. Gift will be given upon presentation`
    },

  ];

  selectedOption: string;
  public dialogRef: MdDialogRef<CardDialogComponent>;

  constructor(public dialog: MdDialog) {

  }

  openDialog(cardInfo: CardInfo) {
    this.dialogRef = this.dialog.open(CardDialogComponent);
    this.dialogRef.componentInstance.card = cardInfo;
    this.dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  ngOnInit() {
  }

}
