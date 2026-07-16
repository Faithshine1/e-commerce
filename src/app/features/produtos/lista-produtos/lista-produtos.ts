import { Component, signal } from '@angular/core';
import {Produto } from '../produto/produto';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
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
    console.log('Produto selecionado: ', nome);
  }

  adicionarProduto() { 
    this.produtos.update((listaAtual) => [
      ...listaAtual, { nome: 'PlayStation 5', preco: 6500.00 },
    ]);
  }
}