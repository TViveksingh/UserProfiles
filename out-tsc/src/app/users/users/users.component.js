import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from 'src/app/shared-module/services/user.service';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(service) {
        this.service = service;
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.findAll()
            .subscribe(function (response) { return _this.users = response.data; });
    };
    UsersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], UsersComponent);
    return UsersComponent;
}());
export { UsersComponent };
//# sourceMappingURL=users.component.js.map