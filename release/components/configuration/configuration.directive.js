"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var configuration_template_directive_1 = require("./configuration-template.directive");
var DatatableConfigurationDirective = (function () {
    function DatatableConfigurationDirective() {
    }
    DatatableConfigurationDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'ngx-datatable-configuration' },] },
    ];
    /** @nocollapse */
    DatatableConfigurationDirective.ctorParameters = function () { return []; };
    DatatableConfigurationDirective.propDecorators = {
        'rowCount': [{ type: core_1.Input },],
        'template': [{ type: core_1.Input }, { type: core_1.ContentChild, args: [configuration_template_directive_1.DataTableConfigurationTemplateDirective, { read: core_1.TemplateRef },] },],
    };
    return DatatableConfigurationDirective;
}());
exports.DatatableConfigurationDirective = DatatableConfigurationDirective;
//# sourceMappingURL=configuration.directive.js.map