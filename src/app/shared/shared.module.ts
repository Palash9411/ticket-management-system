import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { TableComponent } from './component/table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [CustomDatePipe, TableComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports :[CustomDatePipe,TableComponent]
})
export class SharedModule { }
