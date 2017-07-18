import { 
  Component, Output, EventEmitter, ChangeDetectionStrategy, Input, TemplateRef, HostBinding 
} from '@angular/core';

@Component({
  selector: 'datatable-settings',
  styleUrls: ['./settings.scss'],
  template: `
    <div style="display:inline-block; height: 100%; width: 100%;;">
        <div style="display:inline-block; float: left" [hidden]="true">
          <datatable-search
            (search)="search.emit($event)">
          </datatable-search>
        </div>
        <div style="display:inline-block; float: right">
            <div class="setting-tab" [hidden]="!isVisibleLimiter">
              <datatable-limiter
                [limit]="pageSize"
                [limits]="limits"
                (settingUpdate)="page.emit($event)">
              </datatable-limiter>
            </div>
            <div class="setting-tab" [hidden]="!isVisiblePaging">
              <datatable-paging
                [pagerLeftArrowIcon]="pagerLeftArrowIcon"
                [pagerRightArrowIcon]="pagerRightArrowIcon"
                [page]="curPage"
                [size]="pageSize"
                [count]="rowCount"
                (settingUpdate)="page.emit($event)">
              </datatable-paging>
            </div>
            <div style="display:inline-block;" [hidden]="true">
              Cog
            </div>
        </div>
    </div>
  `,
  host: {
    class: 'datatable-settings'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableSettingsComponent {
  @HostBinding('style.height')
  @Input() set settingsHeight(val: any) {
    if (val !== 'auto') {
      this._settingsHeight = `${val}px`;
    } else {
      this._settingsHeight = val;
    }
  }

  get settingsHeight(): any {
    return this._settingsHeight;
  }

  _settingsHeight: string;

  @Input() rowCount: number;
  @Input() pageSize: number;
  @Input() offset: number;
  @Input() pagerLeftArrowIcon: string;
  @Input() pagerRightArrowIcon: string;
  @Input() totalMessage: string;
  @Input() settingsTemplate: TemplateRef<any>;

  @Input() limits: number[];

  @Output() page: EventEmitter<any> = new EventEmitter();
  @Output() search: EventEmitter<any> = new EventEmitter();

  get isVisibleLimiter(): boolean {
    return this.limits && this.limits.length > 0;
  }

  get isVisiblePaging(): boolean {
    return (this.rowCount / this.pageSize) > 1;
  }

  get curPage(): number {
    return this.offset + 1;
  }
}
