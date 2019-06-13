import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroDeProdutosPage } from './cadastro-de-produtos.page';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
var routes = [
    {
        path: '',
        component: CadastroDeProdutosPage
    }
];
var CadastroDeProdutosPageModule = /** @class */ (function () {
    function CadastroDeProdutosPageModule() {
    }
    CadastroDeProdutosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CadastroDeProdutosPage]
        })
    ], CadastroDeProdutosPageModule);
    return CadastroDeProdutosPageModule;
}());
export { CadastroDeProdutosPageModule };
//# sourceMappingURL=cadastro-de-produtos.module.js.map