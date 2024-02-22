const prompt = require("prompt-sync")()

const numeros = [];

for(i = 0; i < 5; i++){
    const addNum = prompt("Digite um número: ")
    numeros.push(addNum) 
}  
const numerosOrdenados = numeros.sort((a, b) => a - b);

console.log("Números ordenados:", numerosOrdenados);

