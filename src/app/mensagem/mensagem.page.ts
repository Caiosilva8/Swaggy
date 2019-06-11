import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.page.html',
  styleUrls: ['./mensagem.page.scss'],
})
export class MensagemPage implements OnInit {

  listaDeMensagem: any[];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true};
  formGroup : FormGroup;

  constructor(public formBuilder : FormBuilder,
              public rauter : Router,
              public loadingController : LoadingController,
              public toastController : ToastController) {
    this.formGroup = this.formBuilder.group({
      titulo : [''],
      texto : [''],
      data : [''],
    })              
  }

  ngOnInit() {
  }


  cadastrar(){
    let ref = this.firestore.collection('mensagem')
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
