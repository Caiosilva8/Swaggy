import * as tslib_1 from "tslib";
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { FormBuilder } from '@angular/forms';
var ProdutoViewPage = /** @class */ (function () {
    function ProdutoViewPage(activatedRoute, formBuilder, router, nav, toastController, loadingController) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.nav = nav;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.produto = new Produto();
        this.firestore = firebase.firestore();
        this.settings = { timestampsInSnapshots: true };
        this.id = this.activatedRoute.snapshot.paramMap.get('produto');
        this.obterProduto();
        this.form();
    }
    ProdutoViewPage.prototype.form = function () {
        this.formGroup = this.formBuilder.group({
            nomeProduto: [this.produto.nomeProduto],
            preco: [this.produto.preco],
            categoria: [this.produto.categoria],
            descricao: [this.produto.descricao]
        });
    };
    ProdutoViewPage.prototype.ngOnInit = function () {
        this.obterProduto();
    };
    ProdutoViewPage.prototype.obterProduto = function () {
        var _this = this;
        var ref = firebase.firestore().collection("produto").doc(this.id);
        ref.get().then(function (doc) {
            _this.produto.id = doc.id;
            _this.produto.setDados(doc.data());
            _this.form();
            console.log(doc.data());
            _this.downloadFoto();
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    };
    ProdutoViewPage.prototype.atualizar = function () {
        var _this = this;
        var ref = this.firestore.collection('produto');
        ref.doc(this.id).set(this.formGroup.value)
            .then(function () {
            _this.toast('Atualizado com Sucesso');
            _this.router.navigate(['/lista-de-produto']);
            _this.loadingController.dismiss();
        }).catch(function () {
            _this.toast('Erro ao Atualizar');
        });
    };
    ProdutoViewPage.prototype.enviaArquivo = function (event) {
        var _this = this;
        var imagem = event.srcElement.files[0];
        console.log(imagem.name);
        var ref = firebase.storage().ref()
            .child("produtos/" + this.id + ".jpg");
        ref.put(imagem).then(function (url) {
            console.log("Enviado com Sucesso");
            _this.downloadFoto();
        });
    };
    ProdutoViewPage.prototype.downloadFoto = function () {
        var _this = this;
        console.log(this.produto.id);
        var ref = firebase.storage().ref()
            .child("produtos/" + this.produto.id + ".jpg");
        ref.getDownloadURL().then(function (url) {
            _this.imagem = url;
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
    ProdutoViewPage = tslib_1.__decorate([
        Component({
            selector: 'app-produto-view',
            templateUrl: './produto-view.page.html',
            styleUrls: ['./produto-view.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            FormBuilder,
            Router,
            NavController,
            ToastController,
            LoadingController])
    ], ProdutoViewPage);
    return ProdutoViewPage;
}());
export { ProdutoViewPage };
//# sourceMappingURL=produto-view.page.js.map