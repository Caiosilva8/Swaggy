import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
var ClienteViewPage = /** @class */ (function () {
    function ClienteViewPage(activatedRoute, formBuilder, router, loadingController, toastController) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.cliente = new Cliente();
        this.firestore = firebase.firestore();
        this.setting = { timestampsInSnapshots: true };
        this.id = this.activatedRoute.snapshot.paramMap.get('cliente');
        this.form();
    }
    ClienteViewPage.prototype.form = function () {
        this.formGroup = this.formBuilder.group({
            nome: [this.cliente.nome],
            telefone: [this.cliente.email],
            email: [this.cliente.senha],
        });
    };
    ClienteViewPage.prototype.ngOnInit = function () {
        this.obterCliente();
    };
    ClienteViewPage.prototype.obterCliente = function () {
        var _this = this;
        var ref = firebase.firestore().collection("cliente").doc(this.id);
        ref.get().then(function (doc) {
            _this.cliente.setDados(doc.data());
            _this.form();
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    };
    ClienteViewPage.prototype.atualizar = function () {
        var _this = this;
        this.loading();
        var ref = this.firestore.collection('cliente');
        ref.doc(this.id).set(this.formGroup.value)
            .then(function () {
            _this.toast('Atualizado com sucesso');
            _this.router.navigate(['/lista-de-clientes']);
            _this.loadingController.dismiss();
        }).catch(function () {
            _this.toast('Erro ao Atualizar');
        });
    };
    ClienteViewPage.prototype.toast = function (msg) {
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
    ClienteViewPage.prototype.loading = function () {
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
    ClienteViewPage = tslib_1.__decorate([
        Component({
            selector: 'app-cliente-view',
            templateUrl: './cliente-view.page.html',
            styleUrls: ['./cliente-view.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            FormBuilder,
            Router,
            LoadingController,
            ToastController])
    ], ClienteViewPage);
    return ClienteViewPage;
}());
export { ClienteViewPage };
//# sourceMappingURL=cliente-view.page.js.map