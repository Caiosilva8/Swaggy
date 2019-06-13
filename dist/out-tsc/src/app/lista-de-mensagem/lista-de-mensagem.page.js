import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Mensagem } from '../model/mensagem';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
var ListaDeMensagemPage = /** @class */ (function () {
    function ListaDeMensagemPage(router, loadingController) {
        this.router = router;
        this.loadingController = loadingController;
        this.listaDeMensagens = [];
        this.firestore = firebase.firestore();
        this.settings = { timestampsInSnapshopts: true };
    }
    ListaDeMensagemPage.prototype.ngOnInit = function () {
        this.getList();
    };
    ListaDeMensagemPage.prototype.viewMensagem = function (obj) {
        this.router.navigate(['/mensagem-view', { 'mensagem': obj.id }]);
    };
    ListaDeMensagemPage.prototype.getList = function () {
        var _this = this;
        this.loading();
        var ref = firebase.firestore().collection("mensagem");
        ref.get().then(function (query) {
            query.forEach(function (doc) {
                var m = new Mensagem();
                m.setDados(doc.data());
                m.id = doc.id;
                _this.listaDeMensagens.push(m);
            });
            _this.loadingController.dismiss();
        });
    };
    ;
    ListaDeMensagemPage.prototype.remove = function (obj) {
        var _this = this;
        var ref = firebase.firestore().collection("mensagem");
        ref.doc(obj.id).delete()
            .then(function () {
            _this.listaDeMensagens = [];
            _this.getList();
        }).catch(function () {
            console.log('Erro ao Atualizar');
        });
    };
    ListaDeMensagemPage.prototype.loading = function () {
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
    ListaDeMensagemPage = tslib_1.__decorate([
        Component({
            selector: 'app-lista-de-mensagem',
            templateUrl: './lista-de-mensagem.page.html',
            styleUrls: ['./lista-de-mensagem.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            LoadingController])
    ], ListaDeMensagemPage);
    return ListaDeMensagemPage;
}());
export { ListaDeMensagemPage };
//# sourceMappingURL=lista-de-mensagem.page.js.map