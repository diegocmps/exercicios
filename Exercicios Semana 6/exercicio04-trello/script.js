function userData() {

    let informacoes = {}
    informacoes.nome = prompt("Qual o seu nome?")
    informacoes.idade = prompt("Qual a sua idade?")
    informacoes.email = prompt("Digite o seu e-mail.")
    return informacoes

    }

function pegarInformacoes(objeto){
    let json = JSON.stringify(objeto)
    localStorage.setItem("exercicio04", json)
}

let usuario = userData()
pegarInformacoes(usuario)