import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormaPagamentoModalPageRoutingModule } from './forma-pagamento-modal-routing.module';

import { FormaPagamentoModalPage } from './forma-pagamento-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormaPagamentoModalPageRoutingModule
  ],
  declarations: [FormaPagamentoModalPage]
})
export class FormaPagamentoModalPageModule {}
