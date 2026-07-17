import { Component, effect, signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = signal ([
    { nome: 'Monitor Gamer',
      preco: 199.99 },
  
    { nome: 'Smartphone', 
      preco: 1599.99 
    },
    { nome: 'Tablet', 
      preco: 12.99 
    },
    { nome: 'Notebook Gamer', 
      preco: 2500.00 
    },
    { nome: 'Teclado Mecânico', 
      preco: 299.99 },
    { nome: 'Mouse Gamer', 
      preco: 149.99 
    },
    { nome: 'Headset Gamer', 
      preco: 89.99 
    },
    { nome: 'Cadeira Gamer', 
      preco: 499.99 
    },
    { nome: 'Placa de Vídeo', 
      preco: 1999.99 
    },

  ]);

  exibirProduto(nome: string) {
    //console.log('Produto selecionado: ', nome);
    this.produtoSelecionado.set(nome);
  }

  adicionarProduto() { 
    this.produtos.update((listaAtual) => [
      ...listaAtual, { nome: 'PlayStation 5', preco: 6500.00 },
    ]);
  }
  totalProdutos = computed(() => this.produtos().length);

  valorTotal = computed(() => {
    return this.produtos().reduce
    ((total, item) => total + item.preco, 0);
  });
substituirProduto(nomeAntigo: string, nomeNovo: string, precoNovo: number) {
    this.produtos.set([
      {nome: 'Arroz Fazenda', preco: 12.99},
      {nome: 'Feijão Timbiras', preco: 15.99},
    ]);
  }
  constructor(){
  effect(() => {
    console.log('Lista de Produtos Alterados: ', this.produtos());

  });
  effect(() =>{
    console.log('Valor Total Atualizados: ', this.valorTotal());

  });
  effect(() => {
    if (typeof document !== 'undefined') {
      document.title = `(${this.totalProdutos()}) Minha Loja`;

    }
  });
 }
 produtoSelecionado = signal <string | null > (null);
}