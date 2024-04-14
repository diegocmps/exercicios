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

    AtualizarPreco(novoValor) {
        this.preco = novoValor

    }
}

class Pessoa {
    nome
    idade
    profissao

    constructor(nome, idade, profissao) {
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}

class Cliente extends Pessoa {
    telefone
    email
    clienteDesde

    constructor(nome, idade, profissao, telefone, email, clienteDesde){
        super(nome, idade, profissao)
        this.telefone = telefone
        this.email = email
        this.clienteDesde = clienteDesde
    }
}

const clienteDiego = new Cliente("Diego", 39, "Auditor", "0489999999", "diego@email.com", "2002-02-13")

console.log(clienteDiego)

//consegui realizar os exercícios completos antes da aula de correções, só havia ficado em dúvida se precisaria criar alguma limitação na string da data, mas vi que na correção ficou apenas com o lançamento dos valores da data entre aspas.