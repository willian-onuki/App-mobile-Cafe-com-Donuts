import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { BdService } from '../services/bd.service';
import { ToastController } from '@ionic/angular';
// import { Router } from "@angular/router";
import { Produto, ProdutoService } from "../services/produto.service";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  constructor(
    private db: BdService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    // private router: Router,
    private produtoService: ProdutoService
  ) {}

  // Variáveis globais para usar no HTML para puxar os dados do formulário.
  mainForm: FormGroup;

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      id: [''],
      nome: [''],
      preco: [''],
      qntd: ['']
    })
  }

  storeData () {
    this.produtoService.addProduto(
      this.mainForm.value.nome,
      this.mainForm.value.preco,
      this.mainForm.value.qntd
    ).then((res) => {
      this.mainForm.reset();
    })
  }

}
