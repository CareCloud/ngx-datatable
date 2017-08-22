import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef
} from '@angular/core';

@Component({
  selector: 'datatable-configuration',
  styleUrls: ['./configuration.scss'],
  template: `
      <div *ngIf="!configurationTemplate">
        <button class="cog-button" (click)="toggleConfigs()">
          <i class="fa fa-cog" aria-hidden="true"></i>
        </button>
        <div class="datatable-configuration-popup" [hidden]="!showConfigs">
          <div>No Template!</div>
        </div>
      </div>
      <ng-template *ngIf="configurationTemplate"
        [ngTemplateOutlet]="configurationTemplate.template"
        [ngOutletContext]="{ 
          rowCount: rowCount
        }">
      </ng-template>
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
