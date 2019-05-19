import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseURL = environment.API_URL;
    }
    UserService.prototype.findAll = function () {
        return this.http.get(this.baseURL + 'users');
    };
    UserService.prototype.findOne = function (id) {
        return this.http.get(this.baseURL + 'users' + ("/" + id));
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map