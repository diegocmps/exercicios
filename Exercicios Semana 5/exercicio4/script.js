const prompt = require("prompt-sync")()

const numeros = []
const quantosNumeros = parseInt(prompt("Quantos numeros deseja informar?"))

for(i = 0; i < quantosNumeros; i++){
    const addNum = parseFloat(prompt("Digite um número: "))
    numeros.push(addNum) 
}
const soma = numeros.reduce((numTotal, num)=> numTotal + num, 0)
console.log("A soma dos números é: ", + soma)