import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'datatable-search',
  styleUrls: ['./search.scss'],
  template: `
    <input type="text" class="search-text" 
        [(ngModel)]="newSearchTerm"
        placeholder="{{searchPlaceholder}}">
    <button class="search-button" *ngIf="showSearch" (click)="submitSearch(newSearchTerm)">
        <i class="fa fa-search" aria-hidden="true"></i>
    </button>
    <button class="search-button" *ngIf="!showSearch" (click)="submitSearch()">
        <i class="fa fa-times-circle" aria-hidden="true"></i>
    </button>
  `,
  host: {
    class: 'datatable-search'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableSearchComponent {
  @Input() searchPlaceholder: string = 'Search';
  @Input()
  set searchTerm(val: string) {
    this._searchTerm = val;
    this._newSearchTerm = val;
  }
  get searchTerm(): string {
    return this._searchTerm;
  }

  set newSearchTerm(val: string) {
    this._newSearchTerm = val;
  }
  get newSearchTerm() {
    if (this._newSearchTerm === '') {
        this._newSearchTerm = void 0;
    }
    return this._newSearchTerm;
  }

  get showSearch() {
    return !this.newSearchTerm || this.searchTerm !== this.newSearchTerm;
  }

  @Output() search: EventEmitter<any> = new EventEmitter();

  _searchTerm: string;
  _newSearchTerm: string;

  submitSearch(search?: string) {
    this.searchTerm = search;
    this.search.emit({
      search
    });
  }
}
