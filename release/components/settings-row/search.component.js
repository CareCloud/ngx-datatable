"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTableSearchComponent = (function () {
    function DataTableSearchComponent() {
        this.searchPlaceholder = 'Search';
        this.search = new core_1.EventEmitter();
    }
    Object.defineProperty(DataTableSearchComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (val) {
            this._searchTerm = val;
            this._newSearchTerm = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSearchComponent.prototype, "newSearchTerm", {
        get: function () {
            if (this._newSearchTerm === '') {
                this._newSearchTerm = void 0;
            }
            return this._newSearchTerm;
        },
        set: function (val) {
            this._newSearchTerm = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableSearchComponent.prototype, "showSearch", {
        get: function () {
            return !this.newSearchTerm || this.searchTerm !== this.newSearchTerm;
        },
        enumerable: true,
        configurable: true
    });
    DataTableSearchComponent.prototype.submitSearch = function (search) {
        this.searchTerm = search;
        this.search.emit({
            search: search
        });
    };
    DataTableSearchComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'datatable-search',
                    styleUrls: ['./search.css'],
                    template: "\n    <input type=\"text\" class=\"search-text\" \n        [(ngModel)]=\"newSearchTerm\"\n        placeholder=\"{{searchPlaceholder}}\">\n    <button class=\"search-button\" *ngIf=\"showSearch\" (click)=\"submitSearch(newSearchTerm)\">\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"search-button\" *ngIf=\"!showSearch\" (click)=\"submitSearch()\">\n        <i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n  ",
                    host: {
                        class: 'datatable-search'
                    },
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    DataTableSearchComponent.ctorParameters = function () { return []; };
    DataTableSearchComponent.propDecorators = {
        'searchPlaceholder': [{ type: core_1.Input },],
        'searchTerm': [{ type: core_1.Input },],
        'search': [{ type: core_1.Output },],
    };
    return DataTableSearchComponent;
}());
exports.DataTableSearchComponent = DataTableSearchComponent;
//# sourceMappingURL=search.component.js.map