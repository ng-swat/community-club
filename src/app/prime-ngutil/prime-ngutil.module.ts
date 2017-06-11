import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonModule, ChartModule, CheckboxModule, DataGridModule, DataListModule, DataTableModule, DialogModule,
  ToggleButtonModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    ToggleButtonModule,
    ChartModule,
    DataTableModule,
    DataGridModule,
    DataListModule,
    DialogModule

  ],
  declarations: [],
  exports: [
    CheckboxModule,
    ButtonModule,
    ToggleButtonModule,
    ChartModule,
    DataTableModule,
    DataGridModule,
    DataListModule,
    DialogModule
  ]
})
export class PrimeNGUtilModule { }
