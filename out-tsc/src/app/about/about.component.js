import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../shared-module/services/user.service';
var AboutComponent = /** @class */ (function () {
    function AboutComponent(service) {
        this.service = service;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.findAll()
            .subscribe(function (response) { return _this.users = response.data; });
    };
    AboutComponent = tslib_1.__decorate([
        Component({
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], AboutComponent);
    return AboutComponent;
}());
export { AboutComponent };
//# sourceMappingURL=about.component.js.map