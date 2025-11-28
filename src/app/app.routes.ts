import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
 
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./catalogo/catalogo.page').then( m => m.CatalogoPage)
  },
  {
    path: 'detalhesdopedido',
    loadComponent: () => import('./detalhesdopedido/detalhesdopedido.page').then( m => m.DetalhesdopedidoPage)
  },
  {
    path: 'carrinho',
    loadComponent: () => import('./carrinho/carrinho.page').then( m => m.CarrinhoPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'enderecos',
    loadComponent: () => import('./enderecos/enderecos.page').then( m => m.EnderecosPage)
  },
  {
    path: 'chekout',
    loadComponent: () => import('./chekout/chekout.page').then( m => m.ChekoutPage)
  },
  {
    path: 'metadodepagamento',
    loadComponent: () => import('./metadodepagamento/metadodepagamento.page').then( m => m.MetadodepagamentoPage)
  },
];
