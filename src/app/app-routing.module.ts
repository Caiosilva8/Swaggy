import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  { path: 'carrinho', loadChildren: './carrinho/carrinho.module#CarrinhoPageModule' },  { path: 'cliente-view', loadChildren: './cliente-view/cliente-view.module#ClienteViewPageModule' },
  { path: 'produto-view', loadChildren: './produto-view/produto-view.module#ProdutoViewPageModule' }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
