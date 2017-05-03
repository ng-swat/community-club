import {MdDialogRef} from '@angular/material';
export class CardInfo {
  title: string;
  balance: number;
  image: string;
  text: string;
  fullInfo: string;
  smallLetters: string;


  constructor(public dialogRef: MdDialogRef<CardInfo>) {
  };

}
