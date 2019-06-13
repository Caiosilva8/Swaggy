import * as tslib_1 from "tslib";
import { Pedido } from './../model/pedido';
import { StorageService } from './../service/storage.service';
import { Component } from '@angular/core';
var CarrinhoPage = /** @class */ (function () {
    function CarrinhoPage(storageServ) {
        this.storageServ = storageServ;
        this.pedido = new Pedido();
        this.pedido = storageServ.getCart();
        console.log(this.pedido);
    }
    CarrinhoPage.prototype.ngOnInit = function () {
    };
    CarrinhoPage.prototype.removeCar = function (produto) {
        this.storageServ.setRemoveCart(produto);
        this.pedido = this.storageServ.getCart();
    };
    CarrinhoPage = tslib_1.__decorate([
        Component({
            selector: 'app-carrinho',
            templateUrl: './carrinho.page.html',
            styleUrls: ['./carrinho.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StorageService])
    ], CarrinhoPage);
    return CarrinhoPage;
}());
export { CarrinhoPage };
//# sourceMappingURL=carrinho.page.js.map