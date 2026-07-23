import { Component, effect, signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { UpperCasePipe } from '@angular/common';
import { HttpClient} from '@angular/common/http';
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

//! criar o método para a requisição dos produtos
carregarProdutos(){

  //! Iniciar Loading
  this.carregando.set(true);
  this.http.get <{title: string; price: number}[]>
    ('https://fakestoreapi.com/products')
      .subscribe({
          next:(dados) => {

            //!Adapta a API para nosso Projeto
            const produtosFormatados = dados.map(p => ({
              nome: p.title,
              preco:p.price
            }));
            this.produtos.set(produtosFormatados);
            this.carregando.set(false); 
          },
          //? Finaliza loading
          error: (erro) =>{
            console.error('Erro ao carregar produtos: ', erro);
            this.carregando.set(false); //! Evita Loading infinitos
          }
      });
}

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
  constructor( private http: HttpClient ){

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

}