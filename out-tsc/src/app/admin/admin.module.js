import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib_1.__decorate([
        NgModule({
            declarations: [AdminProfileComponent],
            imports: [
                CommonModule,
                AdminRoutingModule
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
export { AdminModule };
//# sourceMappingURL=admin.module.js.map