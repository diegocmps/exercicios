const validacao = prompt("Digite um número")

function verificaParImpar(numero) {
    return new Promise((resolve, reject) => {
        if( numero % 2 === 0){
            resolve("Númermo validado é par")
        } else {
            reject("Error: número informado é impar.")
        }
    })
}

verificaParImpar(validacao)
.then((msg) =>{
    alert(msg)
})
.catch((erro)=>{
    alert(erro)
})
