import { EventEmitter } from '@angular/core';
export declare class DataTablePagingComponent {
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    size: number;
    count: number;
    page: number;
    readonly totalPages: number;
    settingUpdate: EventEmitter<any>;
    _count: number;
    _page: number;
    _size: number;
    pages: any;
    canPrevious(): boolean;
    canNext(): boolean;
    prevPage(): void;
    nextPage(): void;
    selectPage(page: number): void;
}
