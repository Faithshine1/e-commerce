import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if(!authService.usuarioLogado()){
    return router.createUrlTree(['/login']);
}
//!
if(!authService.admin()){
    return router.createUrlTree(['/acesso-negado']);
}
//!
return true;
};