import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
var ProdutoPage = /** @class */ (function () {
    function ProdutoPage(navCtrl, formBuilder, rauter, loadingController, toastController) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.rauter = rauter;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.firestore = firebase.firestore();
        this.settings = { timestampsInSnapshots: true };
        //this.firestore.settings(this.settings);
        this.formGroup = this.formBuilder.group({
            nomeProduto: [''],
            preco: [''],
            categoria: [''],
            descricao: [''],
        });
    }
    ProdutoPage.prototype.cadastrarP = function () {
        var _this = this;
        var ref = this.firestore.collection('produto');
        ref.add(this.formGroup.value)
            .then(function () {
            _this.toast('Cadastrado com Sucesso');
            _this.rauter.navigate(['/index']);
            _this.loadingController.dismiss();
        }).catch(function () {
            console.log('Erro ao Cadastrar');
        });
    };
    ProdutoPage.prototype.ngOnInit = function () { };
    ProdutoPage.prototype.toast = function (msg) {
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
    ProdutoPage.prototype.loading = function () {
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
    ProdutoPage = tslib_1.__decorate([
        Component({
            selector: 'app-produto',
            templateUrl: './produto.page.html',
            styleUrls: ['./produto.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            FormBuilder,
            Router,
            LoadingController,
            ToastController])
    ], ProdutoPage);
    return ProdutoPage;
}());
export { ProdutoPage };
//# sourceMappingURL=produto.page.js.map