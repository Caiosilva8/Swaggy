import { Injectable } from "@angular/core";
import { Pedido } from '../model/pedido';
import { Produto } from '../model/produto';

@Injectable()
export class StorageService {


    setCart(obj: Pedido) {
        localStorage.setItem('carrinho', JSON.stringify(obj));
    }

    getCart(): Pedido {
        let p = new Pedido();

        let str = localStorage.getItem("carrinho");

        if(str!=null){
            return JSON.parse(str);
        }else{
            return null;
        }
    }

    setRemoveCart(produto : Produto){
        let lista : Pedido = this.getCart();
        
       let pos = lista.itens.findIndex(
           x=>x.produto.id == produto.id);
           
       if(pos!= -1){ // -1 -> Não existe
        lista.itens.splice(pos,1);
        }
        
        localStorage.setItem('carrinho', JSON.stringify(lista));
    }
}