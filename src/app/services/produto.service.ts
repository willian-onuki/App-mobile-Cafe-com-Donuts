import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {BdService} from '../services/bd.service';
// import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'})



export class ProdutoService {

  produtotabela = new BehaviorSubject([]);

  constructor(
    // private httpClient: HttpClient,
    // private sqlPorter: SQLitePorter, 
    private db: BdService
  ) { 
    // this.getProdutos();
  }

  fetchProdutos(): Observable<Produto[]> {
    this.getProdutos();
    return this.produtotabela.asObservable();
  }

  getProdutos() {
    return this.db.getDb().executeSql('SELECT * FROM tabelaproduto', []).then(res => {
      console.log(res);
      
      let items: Produto[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            nome: res.rows.item(i).nome,
            preco: res.rows.item(i).preco,
            qntd: res.rows.item(i).qntd
          });
        }
      } else {
        return this.produtotabela.next([]);
      }
      this.produtotabela.next(items);
    });
  }

  addProduto(nome, preco, qntd) {
    let data = [nome, preco, qntd];
    return this.db.getDb().executeSql('INSERT INTO tabelaproduto (nome, preco, qntd) VALUES (?, ?, ?)', data).then(res => {
      this.getProdutos();
    });
  }

  getProduto(id): Promise<Produto> {
    console.log("Pronto!!!!!!!!!");
    return this.db.getDb().executeSql('SELECT * FROM tabelaproduto WHERE id = ?', [id]).then(res => {
      console.log(res)
      console.log(res.rows.item(0))
      return {
        id: res.rows.item(0).id,
        nome: res.rows.item(0).nome,
        preco: res.rows.item(0).preco,
        qntd: res.rows.item(0).qntd
      }
    });
  }

  updateProduto(id, produto: Produto) {
    let data = [id, produto.nome, produto.preco, produto.qntd];
    console.log(data);
    return this.db.getDb().executeSql(`UPDAte tabelaproduto SET id = ?, nome = ?, preco = ?, qntd = ? WHERE id = ${id}`, data).then(data => {
      this.getProdutos();
    })
  }

  deleteProduto(id) {
    return this.db.getDb().executeSql('DELETE FROM tabelaproduto WHERE id = ?', [id]).then(() => {
      this.getProdutos();
    });
  }
}

export class Produto {
  id: number;
  nome: string;
  preco: number;
  qntd: number;
}