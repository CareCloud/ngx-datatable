import { EventEmitter } from '@angular/core';
export declare class DataTableLimiterComponent {
    limit: number;
    limits: number[];
    settingUpdate: EventEmitter<any>;
    _limit: number;
    _limits: number[];
    selectLimit(limit: string): void;
}
