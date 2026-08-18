import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '../../../core/facades/auth.facade';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

  private authfacade = inject(AuthFacade);
  private router = inject(Router);

  //! SIMULAÇÂO = Indicadores
  totalProdutosCadastrados = signal(20);
  pedidosPendentes = signal(3);
  usuariosCadastrados = signal(8);
  

  usuarioAtual = this.authfacade.usuarioAtual;

  mensagemPerfil = computed(() => {
    const usuario =this.usuarioAtual();
    if (!usuario){
      return('Nenhum usuário Autenticado!')
    }
    return `Usuário autenicado como: $(usuario.perfil)`
  });

  sair(){
    this.authfacade.sair(),
    this.router.navigateByUrl('/login')
  }
}