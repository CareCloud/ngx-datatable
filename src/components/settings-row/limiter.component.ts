import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'datatable-limiter',
  // styleUrls: ['./limiter.scss'],
  template: `
    <select [(ngModel)]="limit" 
      (ngModelChange)="selectLimit(limit)">
      <option *ngFor="let item of _limits" [value]="item">
          Show {{item}} Items
      </option>
    </select>
  `,
  host: {
    class: 'datatable-limiter'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableLimiterComponent {
  @Input()
  set limit(val: number) {
    this._limit = val;
  }
  get limit(): number {
    return this._limit;
  }

  @Input()
  set limits(val: number[]) {
    this._limits = val;
  }
  get limits(): number[] {
    return this._limits;
  }

  @Output() settingUpdate: EventEmitter<any> = new EventEmitter();

  _limit: number = 0;
  _limits: number[] = [];

  selectLimit(limit: string): void {
    this.limit = parseInt(limit, 10);

    this.settingUpdate.emit({
      limit: this.limit,
      page: 1
    });
  }
}
