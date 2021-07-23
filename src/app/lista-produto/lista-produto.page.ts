import { Component, OnInit } from '@angular/core';
import { BdService } from '../services/bd.service';
import { Produto, ProdutoService } from "../services/produto.service";
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CarrinhoModalPage } from '../carrinho-modal/carrinho-modal.page';
import { Storage } from '@ionic/storage';


export interface ItemCarrinho {
  id: number;
  nome: String;
  preco: number;
  qntdItem: number;
};  

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
    public modalCtrl: ModalController,
    private storage: Storage
  ) { }

  Data: Produto[] = []
  produtoCarrinho: ItemCarrinho[] = []
  countCarrinho = 0;
  item: ItemCarrinho[] = [];

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
    console.log(this.produtoCarrinho)
    const productInCart = this.produtoCarrinho.findIndex((item) => item.id === this.Data[i].id) // Retorna um número negativo se não existir na lista
    if (productInCart < 0){ 
      this.produtoCarrinho.push({
        id: this.Data[i].id,
        nome: this.Data[i].nome,
        preco: this.Data[i].preco,
        qntdItem: 1
      });
    } else {
      this.produtoCarrinho[productInCart].qntdItem += 1;
    }
    this.countCarrinho++;
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CarrinhoModalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        listaProduto: this.produtoCarrinho
      }
    });
    modal.onDidDismiss().then((data) => {
      // this.countCarrinho = data.qntdCarrinho
      console.log(data)
      console.log("")
    });
    return await modal.present();
  }

}

