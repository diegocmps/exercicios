class Produto {
    nome
    preco
    quantidade

    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    Vender(quantVendida) {
        if (quantVendida > this.quantidade) {
            console.log("Estoque insuficiente")

        } else {
            this.quantidade -= quantVendida
        }
    }

    Repor(quantReposta) {
        this.quantidade += quantReposta

    }

    MostrarEstoque() {
        console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis.`)
    }

}

const banana = new Produto("Banana", 2, 5)
banana.Vender(10)
banana.Repor(10)
banana.Vender(12)
banana.MostrarEstoque()
console.log(banana)