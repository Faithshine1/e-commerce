import { Component, effect, signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { UpperCasePipe } from '@angular/common';
import { produtoService } from '../produto.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe, UpperCasePipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  //!remover a lista de produtos, dados carregados via API Fakestoreapi
 produtos = signal <
 { nome: string; preco: number } []> ([]);
 //? criar estado de carregamento, 
 // ** true: requisição em andamento, exibir indicador no template
 //! false: esconder indicador e exibir lista de produtos 
 carregando = signal(true);

//? MÉTODO HTTP (API) FOI MODIFICADO PARA (ProdutoService)

//! criar o método para a requisição dos produtos
carregarProdutos(){

  this.carregando.set(true);

  this.produtoService.buscarProdutos().subscribe({
        next: (dados) => {
          const produtos = this.produtoService.transformarProdutos(dados);
          this.produtos.set(produtos);
          this.carregando.set(false);
        },
        error: (erro) => {
          console.error('Erro ao carregar os Produtos: ', erro);
          this.carregando.set(false);
        },
  });
}

//? =========== MÉTODOS EXISTENTES Ñ ALTERAR =============

  exibirProduto(nome: string) {
    console.log('Produto selecionado: ', nome);
    this.produtoSelecionado.set(nome);
  }

  adicionarProduto() { 
    this.produtos.update((listaAtual) => [
      ...listaAtual, { nome: 'Processador Core I5 14550FS', preco: 2500.00 },
    ]);
  }
  totalProdutos = computed(() => this.produtos().length);

  valorTotal = computed(() => {
    return this.produtos().reduce
    ((total, item) => total + item.preco, 0);
  });
substituirProduto() {
    this.produtos.set([
      {nome: 'Teclado', preco: 40.00},
       {nome: 'Mouse', preco: 10.00},
        {nome: 'Monitor', preco: 100.00},
         {nome: 'Desktop', preco: 500.00},
          {nome: 'Headset', preco: 25.00 },
    ]);
  }
  //! injetar httpClient dentro de constructor, reestruturar constructor!!!
  constructor(){

    //! Carregar a API
    this.carregarProdutos();

    //! effects continuam iguais
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
 carrinho = signal<({nome: string; preco: number}[])>([]);
 adicionarAoCarrinho(produto: {nome: string; preco: number}){
    this.carrinho.update(listaAtual => 
      [...listaAtual, produto]);}

quantidadeCarrinho = computed(() => this.carrinho().length);

totalCarrinho = computed(()=> {
  return this.carrinho().reduce((total, item) => 
   total+item.preco,0);
});

//? ================ INJECT ====================
private produtoService = inject (produtoService);
}