import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoadingController, ToastController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.page.html',
  styleUrls: ['./produto-view.page.scss'],
})
export class ProdutoViewPage implements OnInit {

    produto : Produto = new Produto();
    id : string;
    firestore = firebase.firestore();
    settings = {timestampsInSnapshots: true};

    imagem : string = "";

    formGroup  : FormGroup;
    

  constructor(public activatedRoute : ActivatedRoute, 
              public formBuilder : FormBuilder,
              public router : Router,
              public loadingController : LoadingController,
              public NavParams : NavParams,
              public toastController : ToastController  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('produto');
    this.form();
    this.firestore.settings(this.settings);
    this.produto = this.NavParams.get('produto');

   }

   form(){
     this.formGroup = this.formBuilder.group({
       nome : [this.produto.nomeProduto],
       descricao : [this.produto.descricao],
       preco : [this.produto.preco],
       categoria : [this.produto.categoria]
     });
   }

   ionViewDidLoad(){
     this.downloadFoto(); 
   }

  ngOnInit() {
    this.obterProduto();
  }

  obterProduto(){
    var ref = firebase.firestore().collection("produto").doc(this.id);
    ref.get().then(doc=>{
      this.produto.setDados(doc.data());
      this.form();
    }).catch(function(error){
      console.log("Error getting document:", error);
    });
  }

  atualizar(){

    this.loading();
    let ref = this.firestore.collection('produto')
    ref.doc(this.id).set(this.formGroup.value)
      .then(() =>{
        this.toast('Atualizado com sucesso');
        this.router.navigate(['/lista-de-produto']);
        this.loadingController.dismiss();
      }).catch(()=>{
        this.toast('Erro ao Atualizar');
      })
  }


  async toast(msg : string) {
    const toast = await this.toastController.create({
      message: 'Cadastrado com sucesso!',
      duration: 2000
    });
    toast.present();
  }


  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }

  enviaArquivo(event){
    let imagem = event.srcElement.files[0];
    let ref = firebase.storage().ref().child(`Produtos/${this.produto.id}.jpg`);
    ref.put(imagem).then(url=>{
      console.log("Enviado com Sucesso!");
      this.downloadFoto();
    })
  }

  downloadFoto(){
    let ref = firebase.storage().ref().child(`Produtos/${this.produto.id}.jpg`);
    ref.getDownloadURL().then(url=>{
      this.imagem = url;
    });
  }


}