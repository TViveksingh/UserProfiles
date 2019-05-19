import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from 'src/app/shared-module/services/user.service';
var MaincontentComponent = /** @class */ (function () {
    function MaincontentComponent(service) {
        this.service = service;
        this.title = 'UserProfiles';
    }
    MaincontentComponent.prototype.ngOnInit = function () {
    };
    MaincontentComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.findAll()
            .subscribe(function (response) { return _this.users = response; });
    };
    MaincontentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-maincontent',
            templateUrl: './maincontent.component.html',
            styleUrls: ['./maincontent.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], MaincontentComponent);
    return MaincontentComponent;
}());
export { MaincontentComponent };
//# sourceMappingURL=maincontent.component.js.map