var Produto = /** @class */ (function () {
    function Produto() {
    }
    Produto.prototype.setDados = function (obj) {
        this.nomeProduto = obj.nomeProduto;
        this.preco = obj.preco;
        this.categoria = obj.categoria;
        this.descricao = obj.descricao;
    };
    return Produto;
}());
export { Produto };
//# sourceMappingURL=produto.js.map