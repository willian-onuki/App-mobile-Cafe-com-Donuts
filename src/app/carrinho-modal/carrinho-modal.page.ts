import { Component, Input, OnInit } from '@angular/core';
import { ItemCarrinho } from '../lista-produto/lista-produto.page';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { fromEvent, Subscription } from 'rxjs';
import { FormaPagamentoModalPage } from '../forma-pagamento-modal/forma-pagamento-modal.page';

@Component({
  selector: 'app-carrinho-modal',
  templateUrl: './carrinho-modal.page.html',
  styleUrls: ['./carrinho-modal.page.scss'],
})
export class CarrinhoModalPage implements OnInit {

  @Input() listaProduto: ItemCarrinho[]
  public precoTotal: number
  private backbuttonSubscription: Subscription;

  constructor(
    private toast: ToastController,
    private alert: AlertController,
    private modalController: ModalController,
    private modalCtrl: ModalController
  ) {

  }

  ngOnInit() {
    const event = fromEvent(document, 'backbutton');
    this.backbuttonSubscription = event.subscribe(async () => {
      const modal = await this.modalCtrl.getTop();
      if (modal) {
        console.log("backdrop")
        this.modalController.dismiss({
          qntdCarrinho: this.listaProduto.length
        });
        // this.dismiss();
      }
    });
  }
  
  ngOnDestroy() {
    this.backbuttonSubscription.unsubscribe();
  }

  retirar(i) {
    this.listaProduto[i].qntdItem--;
    if (this.listaProduto[i].qntdItem == 0) {
      this.retirarAlerta(i)
    }
  }

  async retirarAlerta(i) {
    const alert = await this.alert.create({
      header: 'Deseja retirar o produto?',
      message: 'Motivo: A quantidade do produto é igual zero',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.removerProduto(i);
          }
        },
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            this.listaProduto[i].qntdItem = 1;
          }
        }
      ]
    });

    await alert.present();
  }

  adicionar(i) {
    this.listaProduto[i].qntdItem++;
  }

  removerProduto(i) {
    this.listaProduto.splice(i, 1);
  }

  calculaTotal() {
    return this.precoTotal = this.listaProduto.reduce((i, j) =>
      i + j.preco * j.qntdItem, 0
    )
  }

  async presentModal2() {
    const modal = await this.modalCtrl.create({
      component: FormaPagamentoModalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        listaProdutoFinal: this.listaProduto,
        precoFinal: this.precoTotal
      }
    });
    // modal.onDidDismiss().then((data) => {
    //   // this.countCarrinho = data.qntdCarrinho
    //   console.log(data)
    //   console.log("")
    // });
    return await modal.present();
  }

  // dismiss() {
  //   this.modalController.dismiss({
  //     qntdCarrinho: this.listaProduto.length
  //   });
  // }
}
