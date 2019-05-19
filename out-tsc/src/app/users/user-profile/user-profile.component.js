import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared-module/services/user.service';
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserProfileComponent.prototype.getUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService.findOne(id)
            .subscribe(function (data) {
            console.log('User ', _this.user);
            _this.user = data;
            console.log('User ', _this.user);
        });
    };
    UserProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            UserService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map