import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
var CadastroDeClientePage = /** @class */ (function () {
    function CadastroDeClientePage(formBuilder, rauter, loadingController, toastController) {
        this.formBuilder = formBuilder;
        this.rauter = rauter;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.firestore = firebase.firestore();
        this.settings = { timestampsInSnapshots: true };
        this.formGroup = this.formBuilder.group({
            nome: [''],
            email: [''],
            senha: [''],
        });
    }
    CadastroDeClientePage.prototype.ngOnInit = function () {
    };
    CadastroDeClientePage.prototype.cadastrar = function () {
        var _this = this;
        this.loading();
        var ref = this.firestore.collection('cliente');
        ref.add(this.formGroup.value)
            .then(function () {
            _this.toast('Cadastrado com Sucesso');
            _this.rauter.navigate(['/list']);
            _this.loadingController.dismiss();
        }).catch(function () {
            _this.toast('Erro ao Cadastrar');
            _this.loadingController.dismiss();
        });
    };
    CadastroDeClientePage.prototype.toast = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Cadastrado com sucesso!',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroDeClientePage.prototype.loading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Carregando',
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroDeClientePage = tslib_1.__decorate([
        Component({
            selector: 'app-cadastro-de-cliente',
            templateUrl: './cadastro-de-cliente.page.html',
            styleUrls: ['./cadastro-de-cliente.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router,
            LoadingController,
            ToastController])
    ], CadastroDeClientePage);
    return CadastroDeClientePage;
}());
export { CadastroDeClientePage };
//# sourceMappingURL=cadastro-de-cliente.page.js.map