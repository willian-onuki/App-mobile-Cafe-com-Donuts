import { Component, OnInit } from '@angular/core';
import { BdService } from '../services/bd.service';
import { Produto, ProdutoService } from "../services/produto.service";
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CarrinhoModalPage } from '../carrinho-modal/carrinho-modal.page';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.page.html',
  styleUrls: ['./lista-produto.page.scss'],
})

export class ListaProdutoPage implements OnInit {

  constructor(
    private db: BdService,
    private produtoService: ProdutoService,
    private toast: ToastController,
    public modalCtrl: ModalController
  ) { }

  Data: Produto[] = []
  produtoCarrinho: Produto[] = []


  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if (res) {
        this.produtoService.fetchProdutos().subscribe(item => {
          this.Data = item
        })
      }
    });
  }

  deleteProduto(id) {
    this.produtoService.deleteProduto(id).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Produto deletado',
        duration: 2500
      });
      toast.present();
    })
  }

  addCarrinho (i) {
    this.produtoCarrinho.push(this.Data[i]);
  }

  

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CarrinhoModalPage,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();
  }

}
