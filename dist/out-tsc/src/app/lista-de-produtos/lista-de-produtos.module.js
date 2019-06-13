import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListaDeProdutosPage } from './lista-de-produtos.page';
import { StorageService } from '../service/storage.service';
var routes = [
    {
        path: '',
        component: ListaDeProdutosPage
    }
];
var ListaDeProdutosPageModule = /** @class */ (function () {
    function ListaDeProdutosPageModule() {
    }
    ListaDeProdutosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListaDeProdutosPage],
            providers: [StorageService]
        })
    ], ListaDeProdutosPageModule);
    return ListaDeProdutosPageModule;
}());
export { ListaDeProdutosPageModule };
//# sourceMappingURL=lista-de-produtos.module.js.map