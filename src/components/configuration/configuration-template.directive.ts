import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngx-datatable-configuration-template]' })
export class DataTableConfigurationTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}
