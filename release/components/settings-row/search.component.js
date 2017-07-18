"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTableSearchComponent = (function () {
    function DataTableSearchComponent() {
        this.search = new core_1.EventEmitter();
        this._searchTerm = '';
    }
    Object.defineProperty(DataTableSearchComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (val) {
            this._searchTerm = val;
        },
        enumerable: true,
        configurable: true
    });
    DataTableSearchComponent.prototype.submitSearch = function (search) {
        this.search.emit({
            search: search
        });
    };
    DataTableSearchComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'datatable-search',
                    // styleUrls: ['./search.css'],
                    template: "\n    <input type=\"text\" />\n    <button (click)=\"submitSearch()\"></button>\n  ",
                    host: {
                        class: 'datatable-search'
                    },
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    DataTableSearchComponent.ctorParameters = function () { return []; };
    DataTableSearchComponent.propDecorators = {
        'searchTerm': [{ type: core_1.Input },],
        'search': [{ type: core_1.Output },],
    };
    return DataTableSearchComponent;
}());
exports.DataTableSearchComponent = DataTableSearchComponent;
//# sourceMappingURL=search.component.js.map