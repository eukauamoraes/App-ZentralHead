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
    path: 'carrinho',
    loadComponent: () => import('./carrinho/carrinho.page').then( m => m.CarinhoPage)
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
    path: 'metadodepagamento',
    loadComponent: () => import('./metadodepagamento/metadodepagamento.page').then( m => m.MetadodepagamentoPage)
  },

  
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'detalhes-produto',
    loadComponent: () => import('./detalhes-produto/detalhes-produto.page').then( m => m.DetalhesProdutoPage)
  },
  {
    path: 'detalhe-pedido',
    loadComponent: () => import('./detalhe-pedido/detalhe-pedido.page').then( m => m.DetalhePedidoPage)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./checkout/checkout.page').then( m => m.ChekoutPage)
  },




];
