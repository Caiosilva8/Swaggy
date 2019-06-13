import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListaDeClientesPage } from './lista-de-clientes.page';
var routes = [
    {
        path: '',
        component: ListaDeClientesPage
    }
];
var ListaDeClientesPageModule = /** @class */ (function () {
    function ListaDeClientesPageModule() {
    }
    ListaDeClientesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListaDeClientesPage]
        })
    ], ListaDeClientesPageModule);
    return ListaDeClientesPageModule;
}());
export { ListaDeClientesPageModule };
//# sourceMappingURL=lista-de-clientes.module.js.map