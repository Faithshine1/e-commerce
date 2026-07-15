import { Component, signal } from '@angular/core';
//!import { RouterOutlet } from '@angular/router'; //remove importação do RouterOutlet, pois não está sendo usado no momento
import { Produto } from './features/produtos/produto/produto'; //Import do componente Produto
import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos'; //Import do componente ListaProdutos
@Component({
  selector: 'app-root',
  imports: [ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
