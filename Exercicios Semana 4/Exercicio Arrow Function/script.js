const numeros = [34, 22, 28, 64, 128, 222]

const media = () => {
    const soma = numeros.reduce((ni, nf)=> ni + nf, 0);
    const resultado = soma/numeros.length;
    return resultado;
}

resultado = media()
console.log("A média dos números é: " + resultado)