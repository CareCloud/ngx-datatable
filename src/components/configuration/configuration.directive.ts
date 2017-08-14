import { Input, Output, EventEmitter, Directive, TemplateRef, ContentChild } from '@angular/core';
import { DataTableConfigurationTemplateDirective } from './configuration-template.directive';

@Directive({ selector: 'ngx-datatable-configuration' })
export class DatatableConfigurationDirective {

  @Input() rowCount: number;

  @Input()
  @ContentChild(DataTableConfigurationTemplateDirective, { read: TemplateRef }) 
  template: TemplateRef<any>;

}
