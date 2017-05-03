import {NgModule} from '@angular/core';
// import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule,
  MdCheckboxModule, MdDialogModule, MdGridListModule, MdIcon, MdIconModule, MdInputModule, MdListModule, MdMenuModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule, MdTabsModule, MdToolbarModule
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
    MdDialogModule,
    MdGridListModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule
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
    MdDialogModule,
    MdGridListModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule
  ],
  declarations: []
})
export class MaterialUtilModule {
}
