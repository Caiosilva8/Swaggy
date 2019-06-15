import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import * as firebase from 'firebase';
var IndexPage = /** @class */ (function () {
    function IndexPage() {
        this.listaDeProdutos = [];
        this.slideOpts = {
            initialSlide: 0,
            speed: 20,
            autoplay: true,
            loop: true,
            slidesPerView: 1,
        };
    }
    IndexPage.prototype.ngOnInit = function () {
    };
    IndexPage.prototype.getList = function () {
        var _this = this;
        var ref = firebase.firestore().collection("produto");
        ref.get().then(function (query) {
            query.forEach(function (doc) {
                var c = new Produto();
                c.setDados(doc.data());
                c.id = doc.id;
                var ref = firebase.storage().ref().child("produtos/" + doc.id + ".jpg").getDownloadURL().then(function (url) {
                    c.foto = url;
                    _this.listaDeProdutos.push(c);
                });
            });
        });
    };
    IndexPage = tslib_1.__decorate([
        Component({
            selector: 'app-index',
            templateUrl: './index.page.html',
            styleUrls: ['./index.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], IndexPage);
    return IndexPage;
}());
export { IndexPage };
//# sourceMappingURL=index.page.js.map