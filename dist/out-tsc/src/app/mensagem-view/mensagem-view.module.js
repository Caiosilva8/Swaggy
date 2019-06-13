import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MensagemViewPage } from './mensagem-view.page';
var routes = [
    {
        path: '',
        component: MensagemViewPage
    }
];
var MensagemViewPageModule = /** @class */ (function () {
    function MensagemViewPageModule() {
    }
    MensagemViewPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ReactiveFormsModule
            ],
            declarations: [MensagemViewPage]
        })
    ], MensagemViewPageModule);
    return MensagemViewPageModule;
}());
export { MensagemViewPageModule };
//# sourceMappingURL=mensagem-view.module.js.map