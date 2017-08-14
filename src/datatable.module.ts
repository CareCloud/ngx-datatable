import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/observable/fromEvent';

import {
  DatatableComponent,
  DataTableColumnDirective,
  DataTableHeaderComponent,
  DataTableBodyComponent,
  DataTableFooterComponent,
  DataTableSettingsComponent,
  DataTableHeaderCellComponent,
  DataTablePagerComponent,
  DataTablePagingComponent,
  DataTableLimiterComponent,
  DataTableSearchComponent,
  DataTableBodyRowComponent,
  DataTableRowWrapperComponent,
  ProgressBarComponent,
  DataTableBodyCellComponent,
  DatatableRowDetailDirective,
  ScrollerComponent,
  DataTableSelectionComponent,
  DataTableColumnHeaderDirective,
  DataTableColumnCellDirective,
  DataTableConfigurationComponent,
  DatatableConfigurationDirective,
  DataTableConfigurationTemplateDirective,
  DatatableRowDetailTemplateDirective,
  DataTableFooterTemplateDirective,
  DatatableFooterDirective
} from './components';

import {
  VisibilityDirective,
  LongPressDirective,
  ResizeableDirective,
  OrderableDirective,
  DraggableDirective
} from './directives';

import { ScrollbarHelper } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ScrollbarHelper
  ],
  declarations: [
    DataTableFooterTemplateDirective,
    DataTableConfigurationTemplateDirective,
    VisibilityDirective,
    DraggableDirective,
    ResizeableDirective,
    OrderableDirective,
    LongPressDirective,
    ScrollerComponent,
    DatatableComponent,
    DataTableColumnDirective,
    DataTableHeaderComponent,
    DataTableHeaderCellComponent,
    DataTableBodyComponent,
    DataTableFooterComponent,
    DataTableSettingsComponent,
    DataTablePagerComponent,
    DataTablePagingComponent,
    DataTableLimiterComponent,
    DataTableSearchComponent,
    ProgressBarComponent,
    DataTableBodyRowComponent,
    DataTableRowWrapperComponent,
    DatatableRowDetailDirective,
    DatatableRowDetailTemplateDirective,
    DataTableBodyCellComponent,
    DataTableSelectionComponent,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective,
    DataTableConfigurationComponent,
    DatatableConfigurationDirective,
    DatatableFooterDirective
  ],
  exports: [
    DatatableComponent,
    DatatableRowDetailDirective,
    DatatableRowDetailTemplateDirective,
    DataTableColumnDirective,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective,
    DataTableFooterTemplateDirective,
    DatatableFooterDirective,
    DataTableConfigurationTemplateDirective,
    DatatableConfigurationDirective,
    DataTablePagerComponent
  ]
})
export class NgxDatatableModule { }
