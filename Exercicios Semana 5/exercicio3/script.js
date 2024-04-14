const prompt = require("prompt-sync")()

const numeros = []

for(i = 0; i < 5; i++){
    const addNum = prompt("Digite um número: ")
    numeros.push(addNum)
        
}

numeros.map((numAtual)=>{console.log("O número atual é: " + numAtual)})

// Exibição do resultado através do for:

// for (const numero of numeros) {
//     console.log(numero);
// }