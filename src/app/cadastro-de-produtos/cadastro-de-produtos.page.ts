import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from '../model/produto';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-de-produtos',
  templateUrl: './cadastro-de-produtos.page.html',
  styleUrls: ['./cadastro-de-produtos.page.scss'],
})
export class CadastroDeProdutosPage implements OnInit {

  listaDeProdutos: any[];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true};
  formGroup : FormGroup;

  constructor(public formBuilder : FormBuilder,
              public rauter : Router,
              public loadingController : LoadingController,
              public toastController : ToastController) {
    this.formGroup = this.formBuilder.group({
      nomeProduto : [''],
      descricao : [''],
      preco : [''],
      categoria : ['']
    })
  }

  ngOnInit() {
  }

  cadastrar(){

    this.loading();
    let ref = this.firestore.collection('produto')
    ref.add(this.formGroup.value)
    .then(err=>{
      this.toast('Cadastrado com Sucesso');
      console.log(this.formGroup);
      this.rauter.navigate(['/index']);
      this.loadingController.dismiss();
    }).catch(err=>{
      this.toast(err);
      this.loadingController.dismiss();
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


  


}