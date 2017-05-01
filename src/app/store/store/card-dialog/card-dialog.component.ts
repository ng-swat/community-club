import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {CardInfo} from '../cards/card-info';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {

  public card: CardInfo;

  constructor(public dialogRef: MdDialogRef<CardDialogComponent>) {
  }

  ngOnInit() {
  }

}
