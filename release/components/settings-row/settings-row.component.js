"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTableSettingsComponent = (function () {
    function DataTableSettingsComponent() {
        this.page = new core_1.EventEmitter();
        this.search = new core_1.EventEmitter();
    }
    Object.defineProperty(DataTableSettingsComponent.prototype, "settingsHeight", {
        get: function () {
            return this._settingsHeight;
        },
        set: function (val) {
            if (val !== 'auto') {
                this._settingsHeight = val + "px";
            }
            else {
                this._settingsHeight = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSettingsComponent.prototype, "isVisibleSearch", {
        get: function () {
            return this.externalSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSettingsComponent.prototype, "isVisibleLimiter", {
        get: function () {
            return this.limits && this.limits.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSettingsComponent.prototype, "isVisiblePaging", {
        get: function () {
            return (this.rowCount / this.pageSize) > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSettingsComponent.prototype, "curPage", {
        get: function () {
            return this.offset + 1;
        },
        enumerable: true,
        configurable: true
    });
    DataTableSettingsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'datatable-settings',
                    styleUrls: ['./settings.css'],
                    template: "\n    <div class=\"datatable-settings-inner\">\n        <div class=\"settings-left\" [hidden]=\"!isVisibleSearch\">\n          <datatable-search\n            [searchTerm]=\"searchTerm\"\n            [searchPlaceholder]=\"searchPlaceholder\"\n            (search)=\"search.emit($event)\">\n          </datatable-search>\n        </div>\n        <div class=\"settings-right\">\n            <div class=\"setting-tab\" [hidden]=\"!isVisibleLimiter\">\n              <datatable-limiter\n                [limit]=\"pageSize\"\n                [limits]=\"limits\"\n                (settingUpdate)=\"page.emit($event)\">\n              </datatable-limiter>\n            </div>\n            <div class=\"setting-tab\" [hidden]=\"!isVisiblePaging\">\n              <datatable-paging\n                [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n                [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n                [page]=\"curPage\"\n                [size]=\"pageSize\"\n                [count]=\"rowCount\"\n                (settingUpdate)=\"page.emit($event)\">\n              </datatable-paging>\n            </div>\n            <div style=\"display:inline-block;\" [hidden]=\"true\">\n              Cog\n            </div>\n        </div>\n    </div>\n  ",
                    host: {
                        class: 'datatable-settings'
                    },
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    DataTableSettingsComponent.ctorParameters = function () { return []; };
    DataTableSettingsComponent.propDecorators = {
        'settingsHeight': [{ type: core_1.HostBinding, args: ['style.height',] }, { type: core_1.Input },],
        'rowCount': [{ type: core_1.Input },],
        'pageSize': [{ type: core_1.Input },],
        'offset': [{ type: core_1.Input },],
        'pagerLeftArrowIcon': [{ type: core_1.Input },],
        'pagerRightArrowIcon': [{ type: core_1.Input },],
        'totalMessage': [{ type: core_1.Input },],
        'settingsTemplate': [{ type: core_1.Input },],
        'limits': [{ type: core_1.Input },],
        'searchTerm': [{ type: core_1.Input },],
        'searchPlaceholder': [{ type: core_1.Input },],
        'externalSearching': [{ type: core_1.Input },],
        'page': [{ type: core_1.Output },],
        'search': [{ type: core_1.Output },],
    };
    return DataTableSettingsComponent;
}());
exports.DataTableSettingsComponent = DataTableSettingsComponent;
//# sourceMappingURL=settings-row.component.js.map