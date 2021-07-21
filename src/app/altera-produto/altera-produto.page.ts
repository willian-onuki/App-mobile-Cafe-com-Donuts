import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {Produto, ProdutoService} from "../services/produto.service";

@Component({
  selector: 'app-altera-produto',
  templateUrl: './altera-produto.page.html',
  styleUrls: ['./altera-produto.page.scss'],
})
export class AlteraProdutoPage implements OnInit {

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private produtoService: ProdutoService
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    
    this.produtoService.getProduto(this.id).then(res => {
      console.log(res);
      this.editForm.setValue({
        nome: res['nome'],
        preco: res['preco'],
        qntd: res['qntd']
      })
    })
  }

  editForm: FormGroup;
  id: any;

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      nome: [''],
      preco: [''],
      qntd: ['']
    })
  }

  saveForm () {
    this.produtoService.updateProduto(this.id, this.editForm.value).then((res) => {
      console.log(res);
      this.router.navigate(['/home']);
    })
  }

}
