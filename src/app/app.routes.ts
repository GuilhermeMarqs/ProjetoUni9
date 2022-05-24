import { Component } from '@angular/core';
import {Routes } from '@angular/router'
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { DevopsComponent } from './produtos/devops/devops.component';
import { TestesComponent } from './produtos/testes/testes.component';
import { DesignComponent } from './produtos/design/design.component';

export const rootRouterConfig: Routes = [
    {path: '' , redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'produtos', component: ListaProdutoComponent},
    {path: 'devops', component: DevopsComponent},
    {path: 'testes', component: TestesComponent},
    {path: 'design', component: DesignComponent},

];