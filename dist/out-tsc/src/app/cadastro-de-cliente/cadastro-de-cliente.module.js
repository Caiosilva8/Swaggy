import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroDeClientePage } from './cadastro-de-cliente.page';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
var routes = [
    {
        path: '',
        component: CadastroDeClientePage
    }
];
var CadastroDeClientePageModule = /** @class */ (function () {
    function CadastroDeClientePageModule() {
    }
    CadastroDeClientePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CadastroDeClientePage]
        })
    ], CadastroDeClientePageModule);
    return CadastroDeClientePageModule;
}());
export { CadastroDeClientePageModule };
//# sourceMappingURL=cadastro-de-cliente.module.js.map