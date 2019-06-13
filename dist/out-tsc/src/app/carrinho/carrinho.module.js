import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CarrinhoPage } from './carrinho.page';
var routes = [
    {
        path: '',
        component: CarrinhoPage
    }
];
var CarrinhoPageModule = /** @class */ (function () {
    function CarrinhoPageModule() {
    }
    CarrinhoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CarrinhoPage]
        })
    ], CarrinhoPageModule);
    return CarrinhoPageModule;
}());
export { CarrinhoPageModule };
//# sourceMappingURL=carrinho.module.js.map