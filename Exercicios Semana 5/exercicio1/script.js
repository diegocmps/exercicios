const prompt = require("prompt-sync")();

const frutas = []

for ( i =  0; i < 3; i++) {
    const fruta = prompt("Digite o nome de uma fruta:")
    frutas.push(fruta)
}

console.log("A segunda fruta é " + frutas[1])