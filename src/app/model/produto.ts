export class Produto {
    id : string;
    nomeProduto : string;
    preco : string;
    categoria : string;
    descricao : string;
    foto : String;


setDados(obj : any){
    this.nomeProduto = obj.nomeProduto;
    this.preco = obj.preco;
    this.categoria = obj.categoria;
    this.descricao = obj.descricao;
    }

}