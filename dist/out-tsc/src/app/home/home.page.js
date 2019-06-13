import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonSlides } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(router, fire) {
        this.router = router;
        this.fire = fire;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    HomePage.prototype.proximo = function () {
        this.slides.slideNext();
    };
    HomePage.prototype.anterior = function () {
        this.slides.slidePrev();
    };
    HomePage.prototype.logar = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
            .then(function () {
            console.log('Logado com sucesso');
            // this.router.navigate(['/list']);
            _this.router.navigate(['/index']);
        })
            .catch(function () {
            console.log('Login Inválido');
        });
    };
    HomePage.prototype.cadastrar = function () {
        this.fire.auth.createUserWithEmailAndPassword(this.email1.value, this.senha1.value)
            .then(function () {
            console.log("Cadastrado com sucesso!");
        }).catch(function () {
            console.log("Usuário inválido");
        });
    };
    tslib_1.__decorate([
        ViewChild('email'),
        tslib_1.__metadata("design:type", Object)
    ], HomePage.prototype, "email", void 0);
    tslib_1.__decorate([
        ViewChild('senha'),
        tslib_1.__metadata("design:type", Object)
    ], HomePage.prototype, "senha", void 0);
    tslib_1.__decorate([
        ViewChild('email1'),
        tslib_1.__metadata("design:type", Object)
    ], HomePage.prototype, "email1", void 0);
    tslib_1.__decorate([
        ViewChild('senha1'),
        tslib_1.__metadata("design:type", Object)
    ], HomePage.prototype, "senha1", void 0);
    tslib_1.__decorate([
        ViewChild(IonSlides),
        tslib_1.__metadata("design:type", IonSlides)
    ], HomePage.prototype, "slides", void 0);
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AngularFireAuth])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map