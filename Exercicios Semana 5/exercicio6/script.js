const prompt = require("prompt-sync")()

const numeros = []

for(i = 0; i < 5; i++){
    const addNum = prompt("Digite um número: ")
    numeros.push(addNum)   
}

const pares = numeros.filter((n) => {
    if(n % 2 == 0){
       return true 
    } else{
        return false}
    })
    
console.log(pares)