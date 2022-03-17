import { Component } from '@angular/core';
import {Routes } from '@angular/router'
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { PacoteComponent } from './pacotes/pacote/pacote.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';


export const rootRouterConfig: Routes = [
    {path: '' , redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'produtos', component: ListaProdutoComponent},
    {path: 'produtos-detalhe/:id', component: ListaProdutoComponent},
    {path: 'pacote', component: PacoteComponent},

];