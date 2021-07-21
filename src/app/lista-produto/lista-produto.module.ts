import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProdutoPageRoutingModule } from './lista-produto-routing.module';

import { ListaProdutoPage } from './lista-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProdutoPageRoutingModule
  ],
  declarations: [ListaProdutoPage]
})
export class ListaProdutoPageModule {}
