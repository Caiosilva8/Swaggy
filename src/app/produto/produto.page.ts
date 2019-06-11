import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController, NavParams, LoadingController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  

  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true}
  formGroup : FormGroup;

  constructor(public navCtrl : NavController,
              public formBuilder : FormBuilder,
              public rauter : Router,
              public loadingController : LoadingController,
              public toastController : ToastController) { 
                //this.firestore.settings(this.settings);
                this.formGroup = this.formBuilder.group({
                  nomeProduto : [''],
                  preco : [''],
                  categoria : [''],
                  descricao : [''],
                });
              }


  cadastrarP(){
    let ref = this.firestore.collection('produto')
    ref.add(this.formGroup.value)
    .then(()=>{
      this.toast('Cadastrado com Sucesso');
      this.rauter.navigate(['/index']);
      this.loadingController.dismiss();
    }).catch(()=>{
      console.log('Erro ao Cadastrar');
    })
  }

  
  ngOnInit() {}

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
