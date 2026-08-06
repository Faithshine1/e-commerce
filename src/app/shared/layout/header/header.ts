import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import {RouterLink} from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { CarrinhoService } from '../../../core/services/carrinho.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, UpperCasePipe ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'MARTINS TECH';
  public carrinhoService = inject(CarrinhoService);
  quantidade = this.carrinhoService.quantidadeItens;
}
