"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTableConfigurationTemplateDirective = (function () {
    function DataTableConfigurationTemplateDirective(template) {
        this.template = template;
    }
    DataTableConfigurationTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ngx-datatable-configuration-template]' },] },
    ];
    /** @nocollapse */
    DataTableConfigurationTemplateDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
    ]; };
    return DataTableConfigurationTemplateDirective;
}());
exports.DataTableConfigurationTemplateDirective = DataTableConfigurationTemplateDirective;
//# sourceMappingURL=configuration-template.directive.js.map