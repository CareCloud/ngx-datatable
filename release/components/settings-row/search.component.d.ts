import { EventEmitter } from '@angular/core';
export declare class DataTableSearchComponent {
    searchPlaceholder: string;
    searchTerm: string;
    newSearchTerm: string;
    readonly showSearch: boolean;
    search: EventEmitter<any>;
    _searchTerm: string;
    _newSearchTerm: string;
    submitSearch(search?: string): void;
}
