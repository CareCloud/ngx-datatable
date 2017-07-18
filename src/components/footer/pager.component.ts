import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'datatable-pager',
  styleUrls: ['./pager.scss'],
  template: `
    <button class="table-page-item" *ngIf="pages[0].text > 1" (click)=selectPage(1)>
        FIRST
    </button>
    <div class="ellipsis" *ngIf="pages[0].text > 1">
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
    </div>
    <button *ngFor="let pg of pages" 
            class="table-page-item" [class.active]="pg.number === page" 
            (click) ="selectPage(pg.text)">
      {{pg.text}}
    </button>
    <div class="ellipsis" *ngIf="pages[pages.length - 1].text != totalPages">
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
    </div>
    <button class="table-page-item" 
            *ngIf="pages[pages.length - 1].text != totalPages"
            (click)=selectPage(totalPages)>
        LAST
    </button>
  `,
  host: {
    class: 'datatable-pager'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTablePagerComponent {

  @Input() pagerLeftArrowIcon: string;
  @Input() pagerRightArrowIcon: string;
  @Input() pagerPreviousIcon: string;
  @Input() pagerNextIcon: string;

  @Input()
  set size(val: number) {
    this._size = val;
    this.pages = this.calcPages();
  }

  get size(): number {
    return this._size;
  }

  @Input()
  set count(val: number) {
    this._count = val;
    this.pages = this.calcPages();
  }

  get count(): number {
    return this._count;
  }

  @Input()
  set page(val: number) {
    this._page = val;
    this.pages = this.calcPages();
  }

  get page(): number {
    return this._page;
  }

  get totalPages(): number {
    const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
    return Math.max(count || 0, 1);
  }

  @Output() change: EventEmitter<any> = new EventEmitter();

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

      this.change.emit({
        page
      });
    }
  }

  calcPages(page?: number): any[] {
    const pages = [];
    let startPage = 1;
    let endPage = this.totalPages;
    const maxSize = 5;
    const isMaxSized = maxSize < this.totalPages;

    page = page || this.page;

    const left = Math.floor((maxSize - 1) / 2);
    const right = Math.ceil((maxSize - 1) / 2);

    if (isMaxSized) {
        startPage = page - left;
        endPage = page + right;
        if (startPage < 1) {
          startPage = 1;
          endPage = maxSize;
        } else if (endPage > this.totalPages) {
          endPage = this.totalPages;
          startPage = this.totalPages - maxSize + 1;
        }
    }

    for (let num = startPage; num <= endPage; num++) {
      pages.push({
        number: num,
        text: <string><any>num
      });
    }

    return pages;
  }

}
