import { NgModule } from '@angular/core';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataLayoutComponent } from './data-layout/data-layout.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DataGridComponent,
    DataListComponent,
    DataLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule
  ],
  providers : []
})
export class DataModule{ }
