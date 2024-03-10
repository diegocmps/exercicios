class Produto {
    nome
    preco
    quantidade
    
    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
}

const banana = new Produto("Banana", 2, 5)
console.log(banana)