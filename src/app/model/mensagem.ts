export class Mensagem{
    id : string;
    titulo : string;
    texto : string;
    data : string;

    constructor(){
    }

    setDados(obj : any){
        this.titulo = obj.titulo;
        this.texto = obj.texto;
        this.data = obj.data;
    }
}