"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTableConfigurationComponent = (function () {
    function DataTableConfigurationComponent() {
    }
    DataTableConfigurationComponent.prototype.toggleConfigs = function () {
        this.showConfigs = !this.showConfigs;
    };
    DataTableConfigurationComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'datatable-configuration',
                    styleUrls: ['./configuration.css'],
                    template: "\n    <div>\n      <button class=\"cog-button\" (click)=\"toggleConfigs()\">\n        <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n      </button>\n      <div class=\"datatable-configuration-popup\" [hidden]=\"!showConfigs\">\n        <div *ngIf=\"!configurationTemplate\">No Template!</div>\n        <ng-template *ngIf=\"configurationTemplate\"\n          [ngTemplateOutlet]=\"configurationTemplate.template\"\n          [ngOutletContext]=\"{ \n            rowCount: rowCount\n          }\">\n        </ng-template>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'datatable-configuration'
                    },
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    DataTableConfigurationComponent.ctorParameters = function () { return []; };
    DataTableConfigurationComponent.propDecorators = {
        'configurationTemplate': [{ type: core_1.Input },],
    };
    return DataTableConfigurationComponent;
}());
exports.DataTableConfigurationComponent = DataTableConfigurationComponent;
//# sourceMappingURL=configuration.component.js.map