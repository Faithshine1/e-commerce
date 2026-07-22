import {signal} from "@angular/core"

//! Define valor inicial do signal usuarioLogado com (false)
export const usuarioLogado = signal (false);

//! Define signal usuarioLogado como (true), Permite acesso a rotas
export function login(){
    usuarioLogado.set(true)
}

//! Define signal usuarioLogado como (false), bloqueia acesso imediatamente
export function logout(){
    usuarioLogado.set(false)
}