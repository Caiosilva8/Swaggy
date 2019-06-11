import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeProdutosPage } from './lista-de-produtos.page';
import { StorageService } from '../service/storage.service';

const routes: Routes = [
  {
    path: '',
    component: ListaDeProdutosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDeProdutosPage],
  
  providers : [StorageService]
})
export class ListaDeProdutosPageModule {}
