import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeMensagemPage } from './lista-de-mensagem.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeMensagemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDeMensagemPage]
})
export class ListaDeMensagemPageModule {}
