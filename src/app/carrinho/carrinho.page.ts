import { Pedido } from './../model/pedido';
import { StorageService } from './../service/storage.service';
import { Produto } from './../model/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

    pedido : Pedido = new Pedido();

  constructor(public storageServ : StorageService) {
    this.pedido = storageServ.getCart();
    console.log(this.pedido);
   }

  ngOnInit() {
  }

  removeCar(produto : Produto){
    this.storageServ.setRemoveCart(produto);
    this.pedido = this.storageServ.getCart();
  }
}
