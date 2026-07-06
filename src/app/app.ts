import { Component, signal } from '@angular/core';
//!import { RouterOutlet } from '@angular/router'; //remove importação do RouterOutlet, pois não está sendo usado no momento
import { Produto } from './components/produto/produto'; //Import do componente Produto

@Component({
  selector: 'app-root',
  imports: [Produto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
