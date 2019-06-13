import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Cliente } from '../model/cliente';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
var ListaDeClientesPage = /** @class */ (function () {
    function ListaDeClientesPage(router, loadingController) {
        this.router = router;
        this.loadingController = loadingController;
        this.listaDeClientes = [];
        this.firestore = firebase.firestore();
        this.settings = { timestampsInSnapshots: true };
    }
    ListaDeClientesPage.prototype.ngOnInit = function () {
        this.getList();
    };
    ListaDeClientesPage.prototype.viewCliente = function (obj) {
        this.router.navigate(['/cliente-view', { 'cliente': obj.id }]);
    };
    ListaDeClientesPage.prototype.getList = function () {
        var _this = this;
        this.loading();
        var ref = firebase.firestore().collection("cliente");
        ref.get().then(function (query) {
            query.forEach(function (doc) {
                var c = new Cliente();
                c.setDados(doc.data());
                c.id = doc.id;
                _this.listaDeClientes.push(c);
            });
            _this.loadingController.dismiss();
        });
    };
    ;
    ListaDeClientesPage.prototype.remove = function (obj) {
        var _this = this;
        var ref = firebase.firestore().collection("cliente");
        ref.doc(obj.id).delete()
            .then(function () {
            _this.listaDeClientes = [];
            _this.getList();
        }).catch(function () {
            console.log('Erro ao atualizar');
        });
    };
    ListaDeClientesPage.prototype.loading = function () {
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
    ListaDeClientesPage = tslib_1.__decorate([
        Component({
            selector: 'app-lista-de-clientes',
            templateUrl: './lista-de-clientes.page.html',
            styleUrls: ['./lista-de-clientes.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            LoadingController])
    ], ListaDeClientesPage);
    return ListaDeClientesPage;
}());
export { ListaDeClientesPage };
//# sourceMappingURL=lista-de-clientes.page.js.map