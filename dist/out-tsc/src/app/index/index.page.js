import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var IndexPage = /** @class */ (function () {
    function IndexPage() {
        this.slideOpts = {
            initialSlide: 0,
            speed: 20,
            autoplay: true,
            loop: true,
            slidesPerView: 1,
        };
    }
    IndexPage.prototype.ngOnInit = function () {
    };
    IndexPage = tslib_1.__decorate([
        Component({
            selector: 'app-index',
            templateUrl: './index.page.html',
            styleUrls: ['./index.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], IndexPage);
    return IndexPage;
}());
export { IndexPage };
//# sourceMappingURL=index.page.js.map