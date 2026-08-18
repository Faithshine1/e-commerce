import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthFacade } from "../facades/auth.facade";

export const authGuard: CanActivateFn = () => {
    const authFacade = inject(AuthFacade);
    const router = inject(Router);

    if(!authFacade.usuarioLogado()){
    return router.createUrlTree(['/login']);
}
//!
if(!authFacade.admin()){
    return router.createUrlTree(['/acesso-negado']);
}
//!
return true;
};