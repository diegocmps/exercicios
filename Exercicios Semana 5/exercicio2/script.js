const prompt = require("prompt-sync")();

const frutas = []

for ( i =  0; i < 4; i++) {
    const fruta = prompt("Digite o nome de uma fruta:")
    frutas.push(fruta)
}

frutas.shift()

console.log(frutas)