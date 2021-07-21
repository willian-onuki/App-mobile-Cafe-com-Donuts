import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlteraProdutoPage } from './altera-produto.page';

const routes: Routes = [
  {
    path: '',
    component: AlteraProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlteraProdutoPageRoutingModule {}
