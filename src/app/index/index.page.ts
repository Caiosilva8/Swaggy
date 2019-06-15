import { Pedido } from './../model/pedido';
import { StorageService } from './../service/storage.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, LoadingController } from '@ionic/angular';
import { Produto } from '../model/produto';
import * as firebase from 'firebase';
import { Item } from '../model/item';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  listaDeProdutos: Produto[] = [];
  id: string;

  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  pedido : Pedido = new Pedido();
  


  constructor(public loadingController: LoadingController,
              public router : Router,
              public storageServ : StorageService) { }

  ngOnInit() {
    this.getList();
  }


  slideOpts = {
    initialSlide: 0,
    speed: 20,
    autoplay: true,
    loop: true,
    slidesPerView: 1,
  };

  carrinho(){
    this.router.navigate(['carrinho']);
  }


  getList() {
    var ref = firebase.firestore().collection("produto");
    ref.get().then(query => {
      query.forEach(doc => {
        let c = new Produto();
        c.setDados(doc.data());
        c.id = doc.id;


        let ref = firebase.storage().ref().child(`produtos/${doc.id}.jpg`).getDownloadURL().then(url => {
          c.foto = url;

          this.listaDeProdutos.push(c);
        })
      });
      console.log(this.listaDeProdutos)
      this.loadingController.dismiss();
    });
  };

  addCarrinho(produto : Produto){
    this.pedido = this.storageServ.getCart();
    let add = true;

    let i = new Item();
    i.produto = produto;
    i.quantidade = 1;

    if(this.pedido==null){ // Caso pedido esteja vazio
      this.pedido = new Pedido(); //cria umm novo pedido  
      this.pedido.itens = []; //cria uma lista de itens
    }

    this.pedido.itens.forEach(p => {
      if(p.produto.id == produto.id){
        add = false;
      }
    });

    if(add==true) this.pedido.itens.push(i);

    this.storageServ.setCart(this.pedido);
  }
}