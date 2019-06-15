import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, LoadingController } from '@ionic/angular';
import { Produto } from '../model/produto';
import * as firebase from 'firebase';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  listaDeProdutos: Produto[] = [];
  id: string;


  constructor(public loadingController: LoadingController,
              public router : Router) { }

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
}