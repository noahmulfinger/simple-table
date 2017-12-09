import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent } from './simple-table.component';
import { TableCellComponent } from './table-cell/table-cell.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpleTableComponent, TableCellComponent],
  exports: [SimpleTableComponent]
})
export class SimpleTableModule { }
