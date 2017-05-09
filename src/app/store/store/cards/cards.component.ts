import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';
import {CardInfo} from 'app/store/store/cards/card-info';
import {Cards} from '../../../DAL/Cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public Cards = Cards;

  // selectedOption: string;
  public dialogRef: MdDialogRef<CardDialogComponent>;

  constructor(public  dialog: MdDialog) {

  }

  openDialog(cardInfo: CardInfo) {
    this.dialogRef = this.dialog.open(CardDialogComponent);
    this.dialogRef.componentInstance.card = cardInfo;
    // this.dialogRef.afterClosed().subscribe(result => {
    //   this.selectedOption = result;
    // });
  }

  ngOnInit() {
  }

}
