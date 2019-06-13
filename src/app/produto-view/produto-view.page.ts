import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { Produto } from '../model/produto';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.page.html',
  styleUrls: ['./produto-view.page.scss'],
})
export class ProdutoViewPage implements OnInit {

  produto : Produto = new Produto();
  id : string;
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  imagem;
  formGroup: FormGroup;

  constructor(public activatedRoute : ActivatedRoute,
              public formBuilder : FormBuilder,
              public router : Router,
              public nav : NavController,
              public toastController : ToastController,
              public loadingController : LoadingController) {
    this.id = this.activatedRoute.snapshot.paramMap.get('produto');
    this.obterProduto();
    this.form();
  }

  form(){
    this.formGroup = this.formBuilder.group({
      nomeProduto : [this.produto.nomeProduto],
      preco : [this.produto.preco],
      categoria : [this.produto.categoria],
      descricao : [this.produto.descricao]
    });
  }

  ngOnInit() {
    this.obterProduto();
  }


  obterProduto(){
    var ref = firebase.firestore().collection("produto").doc(this.id);
    ref.get().then(doc=>{
      this.produto.setDados(doc.data());
      this.form();
      console.log(doc.data());
    }).catch(function(error){
      console.log("Error getting document:", error);
    });
  }

  atualizar(){
    let ref = this.firestore.collection('produto')
    ref.doc(this.id).set(this.formGroup.value)
    .then(()=>{
      this.toast('Atualizado com Sucesso');
      this.router.navigate(['/lista-de-produto']);
      this.loadingController.dismiss();
    }).catch(()=>{
      this.toast('Erro ao Atualizar');
    })
  }

  enviaArquivo(event) {
    let imagem = event.srcElement.files[0];
    console.log(imagem.name);
    let ref = firebase.storage().ref()
      .child(`produtos/${this.id}.jpg`);

    ref.put(imagem).then(url=> {
      console.log("Enviado com Sucesso");
      this.downloadFoto();
    })
  }

  downloadFoto(){
    let ref = firebase.storage().ref()
      .child(`produtos/${this.produto.id}.jpg`);

    ref.getDownloadURL().then(url=> {
      this.imagem.url;
    })
  }

  async toast(msg : string) {
    const toast = await this.toastController.create({
      message: 'Cadastrado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

}
