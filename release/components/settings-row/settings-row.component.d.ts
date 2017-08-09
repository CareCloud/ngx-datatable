import { EventEmitter, TemplateRef } from '@angular/core';
export declare class DataTableSettingsComponent {
    settingsHeight: any;
    _settingsHeight: string;
    rowCount: number;
    pageSize: number;
    offset: number;
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    totalMessage: string;
    configurationTemplate: TemplateRef<any>;
    limits: number[];
    searchTerm: string;
    searchPlaceholder: string;
    externalSearching: boolean;
    page: EventEmitter<any>;
    search: EventEmitter<any>;
    readonly isVisibleSearch: boolean;
    readonly isVisibleLimiter: boolean;
    readonly isVisiblePaging: boolean;
    readonly curPage: number;
}
