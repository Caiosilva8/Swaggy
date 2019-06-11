import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Mensagem } from '../model/mensagem';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lista-de-mensagem',
  templateUrl: './lista-de-mensagem.page.html',
  styleUrls: ['./lista-de-mensagem.page.scss'],
})
export class ListaDeMensagemPage implements OnInit {

  listaDeMensagens : Mensagem[] = [];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshopts: true};

  constructor(public router : Router,
              public loadingController: LoadingController) {
    }

  ngOnInit() {
    this.getList();
  }

  viewMensagem(obj : Mensagem){
    this.router.navigate(['/mensagem-view', {'mensagem' : obj.id}]);
  }

  getList(){
    this.loading();
    var ref = firebase.firestore().collection("mensagem");
    ref.get().then(query=>{
      query.forEach(doc=>{
        let m = new Mensagem();
        m.setDados(doc.data());
        m.id = doc.id;
        this.listaDeMensagens.push(m);
      });
      this.loadingController.dismiss();
    });
  };

  remove(obj : Mensagem){
    var ref = firebase.firestore().collection("mensagem");
    ref.doc(obj.id).delete()
    .then(()=>{
      this.listaDeMensagens = [];
      this.getList();
    }).catch(()=>{
      console.log('Erro ao Atualizar');
    })
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }

}
