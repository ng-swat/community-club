import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule, ChartModule, CheckboxModule, DataTableModule, ToggleButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    ToggleButtonModule,
    ChartModule,
    DataTableModule
  ],
  declarations: [],
  exports: [
    CheckboxModule,
    ButtonModule,
    ToggleButtonModule,
    ChartModule,
    DataTableModule
  ]
})
export class PrimeNGUtilModule { }
