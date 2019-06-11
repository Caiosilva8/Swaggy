export class Cliente{

    id : string;
    nome : string;
    email : string;
    senha : string;

    constructor(){   
    }

    // Dados do firebase
    setDados(obj : any){
        this.nome = obj.nome;
        this.email = obj.email;
        this.senha = obj.senha;
    }
}