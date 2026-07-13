import { Component } from '@angular/core';
import {UpperCasePipe, CurrencyPipe} from'@angular/common';
import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe';
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
 // produto = 'Notebook';
 // preco = 2500;
 // mostrarProduto = true;
 // mostrarPreco = true;
 produtos = [
    { produto: 'Monitor', preco: 1000 },
    { produto: 'Smartphone', preco: 1500 },
    { produto: 'Tablet', preco: 12.99 },
  ];
}
