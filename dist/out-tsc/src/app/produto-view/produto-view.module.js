import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProdutoViewPage } from './produto-view.page';
var routes = [
    {
        path: '',
        component: ProdutoViewPage
    }
];
var ProdutoViewPageModule = /** @class */ (function () {
    function ProdutoViewPageModule() {
    }
    ProdutoViewPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ReactiveFormsModule
            ],
            declarations: [ProdutoViewPage]
        })
    ], ProdutoViewPageModule);
    return ProdutoViewPageModule;
}());
export { ProdutoViewPageModule };
//# sourceMappingURL=produto-view.module.js.map