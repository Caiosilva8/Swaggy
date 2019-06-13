import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IndexPage } from './index.page';
var routes = [
    {
        path: '',
        component: IndexPage
    }
];
var IndexPageModule = /** @class */ (function () {
    function IndexPageModule() {
    }
    IndexPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [IndexPage]
        })
    ], IndexPageModule);
    return IndexPageModule;
}());
export { IndexPageModule };
//# sourceMappingURL=index.module.js.map