var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    // Dados do firebase
    Cliente.prototype.setDados = function (obj) {
        this.nome = obj.nome;
        this.email = obj.email;
        this.senha = obj.senha;
    };
    return Cliente;
}());
export { Cliente };
//# sourceMappingURL=cliente.js.map