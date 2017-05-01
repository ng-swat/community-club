import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import {MaterialUtilModule} from '../material-util/material-util.module';
import { CardsComponent } from './store/cards/cards.component';
import {CommonModule} from '@angular/common';
import { CardDialogComponent } from './store/card-dialog/card-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialUtilModule,
    // MdCardModule
  ],
  declarations: [StoreComponent, CardsComponent, CardDialogComponent],
  entryComponents: [CardDialogComponent],
  exports: [StoreComponent]
})
export class StoreModule { }
