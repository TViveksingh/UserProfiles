import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
var routes = [
    { path: '', component: UsersComponent },
    { path: ':id', component: UserProfileComponent },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());
export { UsersRoutingModule };
//# sourceMappingURL=users-routing.module.js.map