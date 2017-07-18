import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'datatable-search',
  // styleUrls: ['./search.scss'],
  template: `
    <input type="text" />
    <button (click)="submitSearch()"></button>
  `,
  host: {
    class: 'datatable-search'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableSearchComponent {
  @Input()
  set searchTerm(val: string) {
    this._searchTerm = val;
  }
  get searchTerm(): string {
    return this._searchTerm;
  }

  @Output() search: EventEmitter<any> = new EventEmitter();

  _searchTerm: string = '';

  submitSearch(search: string) {
    this.search.emit({
      search
    });
  }
}
