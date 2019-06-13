import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LogoffPage } from './logoff.page';
var routes = [
    {
        path: '',
        component: LogoffPage
    }
];
var LogoffPageModule = /** @class */ (function () {
    function LogoffPageModule() {
    }
    LogoffPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LogoffPage]
        })
    ], LogoffPageModule);
    return LogoffPageModule;
}());
export { LogoffPageModule };
//# sourceMappingURL=logoff.module.js.map