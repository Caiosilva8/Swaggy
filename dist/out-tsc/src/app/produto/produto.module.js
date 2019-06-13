import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProdutoPage } from './produto.page';
import { ReactiveFormsModule } from '@angular/forms';
var routes = [
    {
        path: '',
        component: ProdutoPage
    }
];
var ProdutoPageModule = /** @class */ (function () {
    function ProdutoPageModule() {
    }
    ProdutoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ReactiveFormsModule,
                FormsModule
            ],
            declarations: [ProdutoPage]
        })
    ], ProdutoPageModule);
    return ProdutoPageModule;
}());
export { ProdutoPageModule };
//# sourceMappingURL=produto.module.js.map