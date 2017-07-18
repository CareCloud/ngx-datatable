"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTablePagerComponent = (function () {
    function DataTablePagerComponent() {
        this.change = new core_1.EventEmitter();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    Object.defineProperty(DataTablePagerComponent.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (val) {
            this._size = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (val) {
            this._count = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (val) {
            this._page = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "totalPages", {
        get: function () {
            var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
            return Math.max(count || 0, 1);
        },
        enumerable: true,
        configurable: true
    });
    DataTablePagerComponent.prototype.canPrevious = function () {
        return this.page > 1;
    };
    DataTablePagerComponent.prototype.canNext = function () {
        return this.page < this.totalPages;
    };
    DataTablePagerComponent.prototype.prevPage = function () {
        this.selectPage(this.page - 1);
    };
    DataTablePagerComponent.prototype.nextPage = function () {
        this.selectPage(this.page + 1);
    };
    DataTablePagerComponent.prototype.selectPage = function (page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page: page
            });
        }
    };
    DataTablePagerComponent.prototype.calcPages = function (page) {
        var pages = [];
        var startPage = 1;
        var endPage = this.totalPages;
        var maxSize = 5;
        var isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        var left = Math.floor((maxSize - 1) / 2);
        var right = Math.ceil((maxSize - 1) / 2);
        if (isMaxSized) {
            startPage = page - left;
            endPage = page + right;
            if (startPage < 1) {
                startPage = 1;
                endPage = maxSize;
            }
            else if (endPage > this.totalPages) {
                endPage = this.totalPages;
                startPage = this.totalPages - maxSize + 1;
            }
        }
        for (var num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: num
            });
        }
        return pages;
    };
    DataTablePagerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'datatable-pager',
                    styleUrls: ['./pager.css'],
                    template: "\n    <button class=\"table-page-item\" *ngIf=\"pages[0].text > 1\" (click)=selectPage(1)>\n        FIRST\n    </button>\n    <div class=\"ellipsis\" *ngIf=\"pages[0].text > 1\">\n      <div class=\"oval\"></div>\n      <div class=\"oval\"></div>\n      <div class=\"oval\"></div>\n    </div>\n    <button *ngFor=\"let pg of pages\" \n            class=\"table-page-item\" [class.active]=\"pg.number === page\" \n            (click) =\"selectPage(pg.text)\">\n      {{pg.text}}\n    </button>\n    <div class=\"ellipsis\" *ngIf=\"pages[pages.length - 1].text != totalPages\">\n      <div class=\"oval\"></div>\n      <div class=\"oval\"></div>\n      <div class=\"oval\"></div>\n    </div>\n    <button class=\"table-page-item\" \n            *ngIf=\"pages[pages.length - 1].text != totalPages\"\n            (click)=selectPage(totalPages)>\n        LAST\n    </button>\n  ",
                    host: {
                        class: 'datatable-pager'
                    },
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    DataTablePagerComponent.ctorParameters = function () { return []; };
    DataTablePagerComponent.propDecorators = {
        'pagerLeftArrowIcon': [{ type: core_1.Input },],
        'pagerRightArrowIcon': [{ type: core_1.Input },],
        'pagerPreviousIcon': [{ type: core_1.Input },],
        'pagerNextIcon': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'count': [{ type: core_1.Input },],
        'page': [{ type: core_1.Input },],
        'change': [{ type: core_1.Output },],
    };
    return DataTablePagerComponent;
}());
exports.DataTablePagerComponent = DataTablePagerComponent;
//# sourceMappingURL=pager.component.js.map