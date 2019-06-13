import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
    { path: 'lista-de-clientes', loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule' },
    { path: 'logoff', loadChildren: './logoff/logoff.module#LogoffPageModule' },
    { path: 'cadastro-de-cliente', loadChildren: './cadastro-de-cliente/cadastro-de-cliente.module#CadastroDeClientePageModule' },
    { path: 'cliente-view', loadChildren: './cliente-view/cliente-view.module#ClienteViewPageModule' },
    { path: 'mensagem', loadChildren: './mensagem/mensagem.module#MensagemPageModule' },
    { path: 'lista-de-mensagem', loadChildren: './lista-de-mensagem/lista-de-mensagem.module#ListaDeMensagemPageModule' },
    { path: 'mensagem-view', loadChildren: './mensagem-view/mensagem-view.module#MensagemViewPageModule' },
    { path: 'index', loadChildren: './index/index.module#IndexPageModule' },
    { path: 'produto', loadChildren: './produto/produto.module#ProdutoPageModule' },
    { path: 'cadastro-de-produtos', loadChildren: './cadastro-de-produtos/cadastro-de-produtos.module#CadastroDeProdutosPageModule' },
    { path: 'lista-de-produtos', loadChildren: './lista-de-produtos/lista-de-produtos.module#ListaDeProdutosPageModule' },
    { path: 'produto-view', loadChildren: './produto-view/produto-view.module#ProdutoViewPageModule' },
    { path: 'carrinho', loadChildren: './carrinho/carrinho.module#CarrinhoPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map