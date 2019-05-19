import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersComponent } from './users/users.component';
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib_1.__decorate([
        NgModule({
            declarations: [UserProfileComponent, UsersComponent],
            imports: [
                CommonModule,
                UsersRoutingModule
            ]
        })
    ], UsersModule);
    return UsersModule;
}());
export { UsersModule };
//# sourceMappingURL=users.module.js.map