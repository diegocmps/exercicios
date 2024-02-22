function adicao(num1, num2, callback) {
    const resultado = num1 + num2;
    callback(resultado)
}

 let imprimirResultado = function (resultado) {
    console.log("O resultado é: " + resultado);
}
adicao(5, 15, imprimirResultado);
