import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListaDeMensagemPage } from './lista-de-mensagem.page';
var routes = [
    {
        path: '',
        component: ListaDeMensagemPage
    }
];
var ListaDeMensagemPageModule = /** @class */ (function () {
    function ListaDeMensagemPageModule() {
    }
    ListaDeMensagemPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListaDeMensagemPage]
        })
    ], ListaDeMensagemPageModule);
    return ListaDeMensagemPageModule;
}());
export { ListaDeMensagemPageModule };
//# sourceMappingURL=lista-de-mensagem.module.js.map