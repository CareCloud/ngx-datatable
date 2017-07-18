import { EventEmitter } from '@angular/core';
export declare class DataTableSearchComponent {
    searchTerm: string;
    search: EventEmitter<any>;
    _searchTerm: string;
    submitSearch(search: string): void;
}
