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
    settingsTemplate: TemplateRef<any>;
    limits: number[];
    page: EventEmitter<any>;
    search: EventEmitter<any>;
    readonly isVisibleLimiter: boolean;
    readonly isVisiblePaging: boolean;
    readonly curPage: number;
}
