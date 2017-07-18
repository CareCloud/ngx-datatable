"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTableLimiterComponent = (function () {
    function DataTableLimiterComponent() {
        this.settingUpdate = new core_1.EventEmitter();
        this._limit = 0;
        this._limits = [];
    }
    Object.defineProperty(DataTableLimiterComponent.prototype, "limit", {
        get: function () {
            return this._limit;
        },
        set: function (val) {
            this._limit = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableLimiterComponent.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        set: function (val) {
            this._limits = val;
        },
        enumerable: true,
        configurable: true
    });
    DataTableLimiterComponent.prototype.selectLimit = function (limit) {
        this.limit = parseInt(limit, 10);
        this.settingUpdate.emit({
            limit: this.limit,
            page: 1
        });
    };
    DataTableLimiterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'datatable-limiter',
                    // styleUrls: ['./limiter.css'],
                    template: "\n    <select [(ngModel)]=\"limit\" \n      (ngModelChange)=\"selectLimit(limit)\">\n      <option *ngFor=\"let item of _limits\" [value]=\"item\">\n          Show {{item}} Items\n      </option>\n    </select>\n  ",
                    host: {
                        class: 'datatable-limiter'
                    },
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    DataTableLimiterComponent.ctorParameters = function () { return []; };
    DataTableLimiterComponent.propDecorators = {
        'limit': [{ type: core_1.Input },],
        'limits': [{ type: core_1.Input },],
        'settingUpdate': [{ type: core_1.Output },],
    };
    return DataTableLimiterComponent;
}());
exports.DataTableLimiterComponent = DataTableLimiterComponent;
//# sourceMappingURL=limiter.component.js.map