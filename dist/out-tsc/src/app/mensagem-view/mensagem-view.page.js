import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Mensagem } from '../model/mensagem';
import * as firebase from 'firebase';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
var MensagemViewPage = /** @class */ (function () {
    function MensagemViewPage(activatedRoute, formBuilder, router, loadingController, toastController) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.mensagem = new Mensagem();
        this.firestore = firebase.firestore();
        this.setting = { timestampsInSnapshots: true };
        this.id = this.activatedRoute.snapshot.paramMap.get('mensagem');
        this.form();
    }
    MensagemViewPage.prototype.form = function () {
        this.formGroup = this.formBuilder.group({
            titulo: [this.mensagem.titulo],
            texto: [this.mensagem.texto],
            data: [this.mensagem.data],
        });
    };
    MensagemViewPage.prototype.ngOnInit = function () {
        this.obterMensagem();
    };
    MensagemViewPage.prototype.obterMensagem = function () {
        var _this = this;
        var ref = firebase.firestore().collection("mensagem").doc(this.id);
        ref.get().then(function (doc) {
            _this.mensagem.setDados(doc.data());
            _this.form();
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    };
    MensagemViewPage.prototype.atualizar = function () {
        var _this = this;
        this.loading();
        var ref = this.firestore.collection('mensagem');
        ref.doc(this.id).set(this.formGroup.value)
            .then(function () {
            _this.toast('Atualizado com Sucesso');
            _this.router.navigate(['/lista-de-mensagem']);
            _this.loadingController.dismiss();
        }).catch(function () {
            _this.toast('Erro ao Atualizar');
        });
    };
    MensagemViewPage.prototype.toast = function (msg) {
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
    MensagemViewPage.prototype.loading = function () {
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
    MensagemViewPage = tslib_1.__decorate([
        Component({
            selector: 'app-mensagem-view',
            templateUrl: './mensagem-view.page.html',
            styleUrls: ['./mensagem-view.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            FormBuilder,
            Router,
            LoadingController,
            ToastController])
    ], MensagemViewPage);
    return MensagemViewPage;
}());
export { MensagemViewPage };
//# sourceMappingURL=mensagem-view.page.js.map