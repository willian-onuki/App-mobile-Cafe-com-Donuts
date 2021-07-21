import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    // /:id
    path: 'produto', 
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'altera-produto/:id',
    loadChildren: () => import('./altera-produto/altera-produto.module').then( m => m.AlteraProdutoPageModule)
  },
  {
    path: 'lista-produto',
    loadChildren: () => import('./lista-produto/lista-produto.module').then( m => m.ListaProdutoPageModule)
  },
  {
    path: 'carrinho-modal',
    loadChildren: () => import('./carrinho-modal/carrinho-modal.module').then( m => m.CarrinhoModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
