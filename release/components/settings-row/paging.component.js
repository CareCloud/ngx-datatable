"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTablePagingComponent = (function () {
    function DataTablePagingComponent() {
        this.settingUpdate = new core_1.EventEmitter();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    Object.defineProperty(DataTablePagingComponent.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (val) {
            this._size = val;
            // this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagingComponent.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (val) {
            this._count = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagingComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (val) {
            this._page = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagingComponent.prototype, "totalPages", {
        get: function () {
            var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
            return Math.max(count || 0, 1);
        },
        enumerable: true,
        configurable: true
    });
    DataTablePagingComponent.prototype.canPrevious = function () {
        return this.page > 1;
    };
    DataTablePagingComponent.prototype.canNext = function () {
        return this.page < this.totalPages;
    };
    DataTablePagingComponent.prototype.prevPage = function () {
        this.selectPage(this.page - 1);
    };
    DataTablePagingComponent.prototype.nextPage = function () {
        this.selectPage(this.page + 1);
    };
    DataTablePagingComponent.prototype.selectPage = function (page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.settingUpdate.emit({
                page: page
            });
        }
    };
    DataTablePagingComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'datatable-paging',
                    styleUrls: ['./paging.css'],
                    template: "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"!canPrevious()\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"prevPage()\">\n          <i class=\"{{pagerLeftArrowIcon}}\"></i>\n        </a>\n      </li>\n      <li>Page {{page}} of {{totalPages}}</li>\n      <li [class.disabled]=\"!canNext()\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"nextPage()\">\n          <i class=\"{{pagerRightArrowIcon}}\"></i>\n        </a>\n      </li>\n    </ul>\n  ",
                    host: {
                        class: 'datatable-paging'
                    },
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    DataTablePagingComponent.ctorParameters = function () { return []; };
    DataTablePagingComponent.propDecorators = {
        'pagerLeftArrowIcon': [{ type: core_1.Input },],
        'pagerRightArrowIcon': [{ type: core_1.Input },],
        'pagerPreviousIcon': [{ type: core_1.Input },],
        'pagerNextIcon': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'count': [{ type: core_1.Input },],
        'page': [{ type: core_1.Input },],
        'settingUpdate': [{ type: core_1.Output },],
    };
    return DataTablePagingComponent;
}());
exports.DataTablePagingComponent = DataTablePagingComponent;
//# sourceMappingURL=paging.component.js.map