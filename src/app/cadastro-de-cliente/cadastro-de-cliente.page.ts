import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-de-cliente',
  templateUrl: './cadastro-de-cliente.page.html',
  styleUrls: ['./cadastro-de-cliente.page.scss'],
})
export class CadastroDeClientePage implements OnInit {

  listaDeClientes: any[];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true};
  formGroup : FormGroup;

  constructor(public formBuilder : FormBuilder,
              public rauter : Router,
              public loadingController : LoadingController,
              public toastController : ToastController) {
    this.formGroup = this.formBuilder.group({
      nome : [''],
      email : [''],
      senha : [''],
    })
  }

  ngOnInit() {
  }

  cadastrar(){

    this.loading();
    let ref = this.firestore.collection('cliente')
    ref.add(this.formGroup.value)
    .then(()=>{
      this.toast('Cadastrado com Sucesso');
      this.rauter.navigate(['/list']);
      this.loadingController.dismiss();
    }).catch(()=>{
      this.toast('Erro ao Cadastrar');
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
