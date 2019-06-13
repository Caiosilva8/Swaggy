import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MensagemPage } from './mensagem.page';
var routes = [
    {
        path: '',
        component: MensagemPage
    }
];
var MensagemPageModule = /** @class */ (function () {
    function MensagemPageModule() {
    }
    MensagemPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MensagemPage]
        })
    ], MensagemPageModule);
    return MensagemPageModule;
}());
export { MensagemPageModule };
//# sourceMappingURL=mensagem.module.js.map