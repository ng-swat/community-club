import {NgModule} from '@angular/core';
// import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule,
  MdCheckboxModule, MdDialogModule, MdGridListModule, MdInputModule, MdSidenavModule, MdSliderModule,
  MdSlideToggleModule, MdTabsModule
} from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    // CommonModule,
    BrowserAnimationsModule,
    MdSliderModule,
    MdCheckboxModule,
    MdSlideToggleModule,
    MdSidenavModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdGridListModule,
    MdTabsModule,
    MdDialogModule
  ],
  exports: [
    MdCheckboxModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSidenavModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdGridListModule,
    MdTabsModule,
    MdDialogModule
  ],
  declarations: []
})
export class MaterialUtilModule {
}
