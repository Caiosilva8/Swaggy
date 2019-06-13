import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Pedido } from '../model/pedido';
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.setCart = function (obj) {
        localStorage.setItem('carrinho', JSON.stringify(obj));
    };
    StorageService.prototype.getCart = function () {
        var p = new Pedido();
        var str = localStorage.getItem("carrinho");
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
        }
    };
    StorageService.prototype.setRemoveCart = function (produto) {
        var lista = this.getCart();
        var pos = lista.itens.findIndex(function (x) { return x.produto.id == produto.id; });
        if (pos != -1) { // -1 -> Não existe
            lista.itens.splice(pos, 1);
        }
        localStorage.setItem('carrinho', JSON.stringify(lista));
    };
    StorageService = tslib_1.__decorate([
        Injectable()
    ], StorageService);
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=storage.service.js.map