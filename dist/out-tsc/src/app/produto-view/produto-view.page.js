import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoadingController, NavParams, ToastController } from '@ionic/angular';
var ProdutoViewPage = /** @class */ (function () {
    function ProdutoViewPage(activatedRoute, formBuilder, router, loadingController, NavParams, toastController) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loadingController = loadingController;
        this.NavParams = NavParams;
        this.toastController = toastController;
        this.produto = new Produto();
        this.firestore = firebase.firestore();
        this.settings = { timestampsInSnapshots: true };
        this.imagem = "";
        this.id = this.activatedRoute.snapshot.paramMap.get('produto');
        this.form();
        this.firestore.settings(this.settings);
        this.produto = this.NavParams.get('produto');
    }
    ProdutoViewPage.prototype.form = function () {
        this.formGroup = this.formBuilder.group({
            nome: [this.produto.nomeProduto],
            descricao: [this.produto.descricao],
            preco: [this.produto.preco],
            categoria: [this.produto.categoria]
        });
    };
    ProdutoViewPage.prototype.ionViewDidLoad = function () {
        this.downloadFoto();
    };
    ProdutoViewPage.prototype.ngOnInit = function () {
        this.obterProduto();
    };
    ProdutoViewPage.prototype.obterProduto = function () {
        var _this = this;
        var ref = firebase.firestore().collection("produto").doc(this.id);
        ref.get().then(function (doc) {
            _this.produto.setDados(doc.data());
            _this.form();
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    };
    ProdutoViewPage.prototype.atualizar = function () {
        var _this = this;
        this.loading();
        var ref = this.firestore.collection('produto');
        ref.doc(this.id).set(this.formGroup.value)
            .then(function () {
            _this.toast('Atualizado com sucesso');
            _this.router.navigate(['/lista-de-produto']);
            _this.loadingController.dismiss();
        }).catch(function () {
            _this.toast('Erro ao Atualizar');
        });
    };
    ProdutoViewPage.prototype.toast = function (msg) {
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
    ProdutoViewPage.prototype.loading = function () {
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
    ProdutoViewPage.prototype.enviaArquivo = function (event) {
        var _this = this;
        var imagem = event.srcElement.files[0];
        var ref = firebase.storage().ref().child("produtos/" + this.produto.id + ".jpg");
        ref.put(imagem).then(function (url) {
            console.log("Enviado com Sucesso!");
            _this.downloadFoto();
        });
    };
    ProdutoViewPage.prototype.downloadFoto = function () {
        var _this = this;
        var ref = firebase.storage().ref().child("produtos/" + this.produto.id + ".jpg");
        ref.getDownloadURL().then(function (url) {
            _this.imagem = url;
        });
    };
    ProdutoViewPage = tslib_1.__decorate([
        Component({
            selector: 'app-produto-view',
            templateUrl: './produto-view.page.html',
            styleUrls: ['./produto-view.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            FormBuilder,
            Router,
            LoadingController,
            NavParams,
            ToastController])
    ], ProdutoViewPage);
    return ProdutoViewPage;
}());
export { ProdutoViewPage };
//# sourceMappingURL=produto-view.page.js.map