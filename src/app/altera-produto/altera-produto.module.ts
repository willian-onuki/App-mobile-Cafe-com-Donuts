import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlteraProdutoPageRoutingModule } from './altera-produto-routing.module';

import { AlteraProdutoPage } from './altera-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlteraProdutoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlteraProdutoPage]
})
export class AlteraProdutoPageModule {}
