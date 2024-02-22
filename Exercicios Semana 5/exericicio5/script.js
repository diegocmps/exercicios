const prompt = require("prompt-sync")()

let numerosOrdenados = []

for(i = 0; i < 5; i++){
    const addNum = prompt("Digite um número: ")
    numerosOrdenados.push(addNum) 
}  

console.log(numerosOrdenados.sort())