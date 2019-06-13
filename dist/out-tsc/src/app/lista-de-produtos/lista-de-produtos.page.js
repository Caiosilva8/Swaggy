import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Produto } from '../model/produto';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { StorageService } from '../service/storage.service';
import { Pedido } from '../model/pedido';
import { Item } from '../model/item';
var ListaDeProdutosPage = /** @class */ (function () {
    function ListaDeProdutosPage(router, loadingController, storageServ, toastController) {
        this.router = router;
        this.loadingController = loadingController;
        this.storageServ = storageServ;
        this.toastController = toastController;
        this.listaDeProdutos = [];
        this.firestore = firebase.firestore();
        this.settings = { timestampsInSnapshots: true };
    }
    ListaDeProdutosPage.prototype.ngOnInit = function () {
        console.log(this.getList());
    };
    ListaDeProdutosPage.prototype.addCarrinho = function (produto) {
        this.pedido = this.storageServ.getCart();
        var add = true;
        var i = new Item();
        i.produto = produto;
        i.quantidade = 1;
        if (this.pedido == null) { // Caso pedido esteja vazio
            this.pedido = new Pedido(); //cria umm novo pedido  
            this.pedido.itens = []; //cria uma lista de itens
        }
        this.pedido.itens.forEach(function (p) {
            if (p.produto.id == produto.id) {
                add = false;
            }
        });
        if (add == true)
            this.pedido.itens.push(i);
        this.storageServ.setCart(this.pedido);
    };
    ListaDeProdutosPage.prototype.atualizar = function (obj) {
        this.router.navigate(['/produto-view', { 'produto': obj.id }]);
    };
    ListaDeProdutosPage.prototype.getList = function () {
        var _this = this;
        this.loading();
        var ref = firebase.firestore().collection("Produto");
        ref.get().then(function (query) {
            query.forEach(function (doc) {
                var c = new Produto();
                c.setDados(doc.data());
                c.id = doc.id;
                _this.listaDeProdutos.push(c);
            });
            console.log(_this.listaDeProdutos);
            _this.loadingController.dismiss();
        });
    };
    ;
    ListaDeProdutosPage.prototype.remove = function (obj) {
        var _this = this;
        var ref = firebase.firestore().collection("Produto");
        ref.doc(obj.id).delete()
            .then(function () {
            _this.listaDeProdutos = [];
            _this.getList();
        }).catch(function () {
            console.log('Erro ao atualizar');
        });
    };
    ListaDeProdutosPage.prototype.loading = function () {
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
    ListaDeProdutosPage = tslib_1.__decorate([
        Component({
            selector: 'app-lista-de-produtos',
            templateUrl: './lista-de-produtos.page.html',
            styleUrls: ['./lista-de-produtos.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            LoadingController,
            StorageService,
            ToastController])
    ], ListaDeProdutosPage);
    return ListaDeProdutosPage;
}());
export { ListaDeProdutosPage };
//# sourceMappingURL=lista-de-produtos.page.js.map