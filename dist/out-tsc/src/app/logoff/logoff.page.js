import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
var LogoffPage = /** @class */ (function () {
    function LogoffPage(fire, router) {
        var _this = this;
        this.fire = fire;
        this.router = router;
        this.fire.auth.signOut().then(function () {
            _this.router.navigate(['/home']);
        }).catch(function () {
            _this.router.navigate(['/list']);
        });
    }
    LogoffPage = tslib_1.__decorate([
        Component({
            selector: 'app-logoff',
            templateUrl: './logoff.page.html',
            styleUrls: ['./logoff.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            Router])
    ], LogoffPage);
    return LogoffPage;
}());
export { LogoffPage };
//# sourceMappingURL=logoff.page.js.map