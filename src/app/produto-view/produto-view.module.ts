import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProdutoViewPage } from './produto-view.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProdutoViewPage,
    RouterModule.forChild(routes)
  ],
  declarations: [ProdutoViewPage]
})
export class ProdutoViewPageModule {}