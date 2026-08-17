import { Injectable, inject } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Injectable({providedIn:'root'})

export class AuthFacade {
    private authService = inject (AuthService);

    usuarioAtual = this.authService.usuarioAtual;
    usuarioLogado = this.authService.usuarioLogado;
    token = this.authService.token;
    admin = this.authService.admin;
    
}