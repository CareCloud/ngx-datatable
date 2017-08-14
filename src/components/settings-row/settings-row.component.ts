import { 
  Component, Output, EventEmitter, ChangeDetectionStrategy, Input, TemplateRef, HostBinding 
} from '@angular/core';

@Component({
  selector: 'datatable-settings',
  styleUrls: ['./settings.scss'],
  template: `
    <div class="datatable-settings-inner">
        <div class="settings-left" [hidden]="!isVisibleSearch">
          <datatable-search
            [searchTerm]="searchTerm"
            [searchPlaceholder]="searchPlaceholder"
            (search)="search.emit($event)">
          </datatable-search>
        </div>
        <div class="settings-right">
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
            <div class="setting-tab cog">
              <datatable-configuration 
                [configurationTemplate]="configurationTemplate">
              </datatable-configuration>
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
  @Input() configurationTemplate: TemplateRef<any>;

  @Input() limits: number[];

  @Input() searchTerm: string;
  @Input() searchPlaceholder: string;
  @Input() externalSearching: boolean;

  @Output() page: EventEmitter<any> = new EventEmitter();
  @Output() search: EventEmitter<any> = new EventEmitter();

  get isVisibleSearch(): boolean {
    return this.externalSearching;
  }

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
