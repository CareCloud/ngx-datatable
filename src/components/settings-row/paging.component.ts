import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'datatable-paging',
  styleUrls: ['./paging.scss'],
  template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a
          href="javascript:void(0)"
          (click)="prevPage()">
          <i class="{{pagerLeftArrowIcon}}"></i>
        </a>
      </li>
      <li>{{messages.page}} {{page}} {{messages.of}} {{totalPages}}</li>
      <li [class.disabled]="!canNext()">
        <a
          href="javascript:void(0)"
          (click)="nextPage()">
          <i class="{{pagerRightArrowIcon}}"></i>
        </a>
      </li>
    </ul>
  `,
  host: {
    class: 'datatable-paging'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTablePagingComponent {

  @Input() pagerLeftArrowIcon: string;
  @Input() pagerRightArrowIcon: string;
  @Input() pagerPreviousIcon: string;
  @Input() pagerNextIcon: string;

  @Input()
  set size(val: number) {
    this._size = val;
    // this.pages = this.calcPages();
  }

  get size(): number {
    return this._size;
  }

  @Input()
  set count(val: number) {
    this._count = val;
  }

  get count(): number {
    return this._count;
  }

  @Input()
  set page(val: number) {
    this._page = val;
  }

  get page(): number {
    return this._page;
  }

  get totalPages(): number {
    const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
    return Math.max(count || 0, 1);
  }

  @Input() messages: any;

  @Output() settingUpdate: EventEmitter<any> = new EventEmitter();

  _count: number = 0;
  _page: number = 1;
  _size: number = 0;
  pages: any;

  canPrevious(): boolean {
    return this.page > 1;
  }

  canNext(): boolean {
    return this.page < this.totalPages;
  }

  prevPage(): void {
    this.selectPage(this.page - 1);
  }

  nextPage(): void {
    this.selectPage(this.page + 1);
  }

  selectPage(page: number): void {
    if (page > 0 && page <= this.totalPages && page !== this.page) {
      this.page = page;

      this.settingUpdate.emit({
        page
      });
    }
  }
}
