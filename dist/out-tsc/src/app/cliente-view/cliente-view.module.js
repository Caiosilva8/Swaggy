import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ClienteViewPage } from './cliente-view.page';
var routes = [
    {
        path: '',
        component: ClienteViewPage
    }
];
var ClienteViewPageModule = /** @class */ (function () {
    function ClienteViewPageModule() {
    }
    ClienteViewPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ClienteViewPage]
        })
    ], ClienteViewPageModule);
    return ClienteViewPageModule;
}());
export { ClienteViewPageModule };
//# sourceMappingURL=cliente-view.module.js.map