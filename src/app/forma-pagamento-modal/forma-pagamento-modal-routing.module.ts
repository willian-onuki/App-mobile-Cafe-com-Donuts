import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormaPagamentoModalPage } from './forma-pagamento-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FormaPagamentoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormaPagamentoModalPageRoutingModule {}
