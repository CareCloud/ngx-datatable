import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef
} from '@angular/core';

@Component({
  selector: 'datatable-configuration',
  styleUrls: ['./configuration.scss'],
  template: `
    <div>
      <button class="cog-button" (click)="toggleConfigs()">
        <i class="fa fa-cog" aria-hidden="true"></i>
      </button>
      <div class="datatable-configuration-popup" [hidden]="!showConfigs">
        <div *ngIf="!configurationTemplate">No Template!</div>
        <ng-template *ngIf="configurationTemplate"
          [ngTemplateOutlet]="configurationTemplate.template"
          [ngOutletContext]="{ 
            rowCount: rowCount
          }">
        </ng-template>
      </div>
    </div>
  `,
  host: {
    class: 'datatable-configuration'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableConfigurationComponent {
  @Input() configurationTemplate: TemplateRef<any>;

  private showConfigs: boolean;

  toggleConfigs() {
    this.showConfigs = !this.showConfigs;
  }
}
