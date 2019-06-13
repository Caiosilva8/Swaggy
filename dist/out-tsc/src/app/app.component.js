import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, firebaseauth, router) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.firebaseauth = firebaseauth;
        this.router = router;
        this.appPages = [
            {
                title: 'index',
                url: '/index',
                icon: 'home'
            }, {
                title: 'Cadastrar Produto',
                url: '/cadastro-de-produtos',
                icon: 'contacts'
            }, {
                title: 'Lista de Produto',
                url: '/lista-de-produtos',
                icon: 'body'
            }, {
                title: 'Logoff',
                url: '/logoff',
                icon: 'walk'
            }, {
                title: 'Carrinho',
                url: '/carrinho',
                icon: 'cart'
            }
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.firebaseauth.authState
            .subscribe(function (user) {
            if (user) {
                //this.router.navigate(['/lista-de-clientes']);
                _this.router.navigate(['/index']);
            }
            else {
                _this.router.navigate(['/home']);
            }
        }, function () {
            _this.router.navigate(['/lista-de-clientes']);
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            AngularFireAuth,
            Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map