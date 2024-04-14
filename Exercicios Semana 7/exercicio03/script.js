class Produto {
    nome
    preco
    quantidade
    
    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    Vender(quantVendida){
       if(quantVendida > this.quantidade){
            console.log("Estoque insuficiente")
            return

        } else {
            this.quantidade -= quantVendida 
        }
    }
}


const banana = new Produto("Banana", 2, 5)
banana.Vender(2)
console.log(banana)